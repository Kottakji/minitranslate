// Change to handleMessageTest if you want to test a single word in the tests/
chrome.runtime.onMessage.addListener(handleMessage);


// The local storage defaults, set default to true
chrome.storage.sync.get("active", function (result) {
    if (typeof result["active"] === "undefined") {
        chrome.storage.sync.set({"active": true});
    }
});

chrome.storage.sync.get("amount", function (result) {
    if (typeof result["amount"] === "undefined") {
        chrome.storage.sync.set({"amount": 5});
    }
});

chrome.storage.sync.get("type", function (result) {
    if (typeof result["type"] === "undefined") {
        chrome.storage.sync.set({"type": "simplified"});
    }
});

// Init according to the docs
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

// Initialize the database via localStorageDB
// var dictionary = new localStorageDB("dictionary", localStorage);

var db;
var request = window.indexedDB.open("dictionary", 1); // the version number is used for upgrading

request.onerror = function (event) {
    console.log("error");
    console.log(event);
};

request.onsuccess = function (event) {
    console.log("opened just fine");
};

request.onupgradeneeded = function (event) {

    console.log("Upgrade needed");
    initDatabase(event);
};

request.onblocked = function (event) {
    console.log("ON BLOCKED");
};

function initDatabase(event) {
    db = event.target.result;

    if (event.oldVersion < 1) { // You can do versioning here
        var objectStore = db.createObjectStore("items", {autoIncrement: true});
        objectStore.createIndex("key", "key", {unique: false});
        objectStore.createIndex("traditional", "traditional", {unique: false});
        objectStore.createIndex("simplified", "simplified", {unique: false});
        objectStore.createIndex("pinyin", "pinyin", {unique: false});
        objectStore.createIndex("english", "english", {unique: false});
        objectStore.createIndex("cleanEnglish", "cleanEnglish", {unique: false});
        objectStore.createIndex("points", "points", {unique: false}); // Depending on the key, we count the importance

        objectStore.transaction.oncomplete = function () {
            var p = new Promise((resolve) => {
                console.log("PROMISE STUFF");
                getRequest('db/cedict_1_0_ts_utf-8_mdbg.txt', function (result) {
                    resolve(result);
                })
            });
            p.then((result) => {
                console.log("THEN");
                let transaction2 = db.transaction(["items"], "readwrite");
                let itemObjectStore = transaction2.objectStore("items");

                let lines = result.split("\n");
                let pattern = /(.+?) (.+?) (\[.+\]) \/(.+)\//i;
                let matches = null;
                let unwanted = /[\d.,"'\[\]\(\)]|variant/;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i][0] !== "#") {
                        matches = lines[i].match(pattern);

                        // Split the words of English by / (slash)
                        for (let key of matches[4].split("/")) {
                            key = key.replace(/ ?\(.+?\) ?/g, "").trim().toLowerCase();
                            if (!unwanted.test(key)) {

                                // TODO create this for each searchword!!!

                                itemObjectStore.add({
                                    key: key,
                                    traditional: matches[1],
                                    simplified: matches[2],
                                    pinyin: matches[3],
                                    english: matches[4],
                                    cleanEnglish: key, // TODO change
                                    points: calculateValue({
                                        'traditional': matches[1],
                                        'simplified': matches[2],
                                        'pinyin': matches[3],
                                        'english': matches[4],
                                        'cleanEnglish': matches[4].replace(/ ?\(.+?\) ?/g, "").trim().toLowerCase(),
                                    }, key)
                                });
                            }
                        }
                    }
                }
            }).then(() => {console.log("SHOULD BE FINISHED")})
        }
    }
}

function handleMessage(value, sender, sendResponse) {

    let request = window.indexedDB.open("dictionary", 1);
    request.onsuccess = function (event) {
        let db = event.target.result;
        let transaction3 = db.transaction(["items"], "readonly");
        let itemObjectStore = transaction3.objectStore("items");

        let index = itemObjectStore.index("key");
            let rq = index.getAll(value); // Just search for the value
        rq.onsuccess = function () {

            // Order the result based on count
            rq.result.sort( function(a, b) {
                return a.points - b.points; // Ascending
            });
            sendResponse(rq.result);
        };

    };

    return true;  // required....

}

// Vanilla Ajax
function getRequest(url, success, error) {
    var req = false;
    try {
        // most browsers
        req = new XMLHttpRequest();
    } catch (e) {

        return false;
    }
    if (!req) {

        return false;
    }
    if (typeof success != 'function') success = function () {
    };
    if (typeof error != 'function') error = function () {
    };

    req.onreadystatechange = function () {
        if (req.readyState == 4) {

            return req.status === 200 ?
                success(req.responseText) : error(req.status)
                ;
        }
    };
    req.open("GET", url, true);
    req.send(null);

    return req;
}