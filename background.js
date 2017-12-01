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

let db;
let request = window.indexedDB.open("dictionary", 1); // the version number is used for upgrading

request.onupgradeneeded = function (event) {

    initDatabase(event);
};

function initDatabase(event) {
    db = event.target.result;

    if (event.oldVersion < 1) { // You can do versioning here
        let objectStore = db.createObjectStore("items", {autoIncrement: true});
        objectStore.createIndex("key", "key", {unique: false});
        objectStore.createIndex("traditional", "traditional", {unique: false});
        objectStore.createIndex("simplified", "simplified", {unique: false});
        objectStore.createIndex("pinyin", "pinyin", {unique: false});
        objectStore.createIndex("english", "english", {unique: false});
        objectStore.createIndex("cleanEnglish", "cleanEnglish", {unique: false});
        objectStore.createIndex("points", "points", {unique: false}); // Depending on the key, we count the importance

        objectStore.transaction.oncomplete = function () {
            let p = new Promise((resolve) => {
                getRequest('db/cedict_1_0_ts_utf-8_mdbg.txt', function (result) {
                    resolve(result);
                })
            });
            p.then((result) => {
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
            })
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

            let result = rq.result;

            // Order the result based on count
            result.sort(function (a, b) {

                // If the points are the same, do some other query to check the relevancy of the words
                if (a.points === b.points) {
                    return compareRelevancy(a, b);
                }

                return a.points - b.points; // Ascending
            });

            // Remove the ones that have too big a difference in count
            if (result.length > 0) {
                let lowestCount = rq.result[0]["points"];
                result = result.filter(function (item) {

                    return !(item["points"] > lowestCount + 13);  // Used to be 7, but it included the relevancy + points
                });
            }

            sendResponse(result);
        };
    };

    return true;  // required....
}

// Vanilla Ajax
function getRequest(url, success, error) {
    let req = false;
    try {
        // most browsers
        req = new XMLHttpRequest();
    } catch (e) {

        return false;
    }
    if (!req) {

        return false;
    }
    if (typeof success !== 'function') success = function () {
    };
    if (typeof error !== 'function') error = function () {
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