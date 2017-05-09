// Change to handleMessageTest if you want to test a single word in the tests/
chrome.runtime.onMessage.addListener(handleMessage);

// Initialize the database via localStorageDB
var dictionary = new localStorageDB("dictionary", localStorage);

// Check if the database was just created. Useful for initial database setup
if(dictionary.isNew()) {
    initiateDatabase();
}

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

function initiateDatabase() {

    // Required to do it via ajax
    getRequest('db/cedict_1_0_ts_utf-8_mdbg.txt', function (result) {

        dictionary.createTable("items", ["traditional", "simplified", "pinyin", "english", "cleanEnglish"]);

        var lines = result.split("\n");
        var pattern = /(.+?) (.+?) (\[.+\]) \/(.+)\//i;
        var matches = null;

        for (var i = 0; i < lines.length; i++) {
            if (lines[i][0] !== "#") {
                matches = lines[i].match(pattern);

                dictionary.insert("items", {
                    traditional: matches[1],
                    simplified: matches[2],
                    pinyin: matches[3],
                    english: matches[4],
                    cleanEnglish: matches[4].replace(/\(.+?\) ?/g, "").trim() // Used for searching through English words
                });
            }
        }

        // All create/drop/insert/update/delete operations should be committed
        dictionary.commit();

    }, function (error) {
        alert(error);
    });

}

if (dictionary.tableCount() == 0) {
    initiateDatabase();
}

function handleMessage (request, sender, sendResponse) {

    var searchWords = searchWordOptimization(request);

    var result = dictionary.queryAll("items", {
        query: function (row) {
            for (var i = 0; i < searchWords.length; i++) {
                // Search with \b beginning, because we don't want under to match thunder etc
                // Remember, js requires an extra backslash for \b...
                var pattern = new RegExp("\\b" + searchWords[i]);
                if (pattern.test(row.cleanEnglish)) {

                    return true;
                }
            }

            return false;
        }
    });

    sendResponse(wordSortation(dictionary, result, searchWords));

}

// Used for testing purposes in the tests folder
// If you want to use it, change the handleMessage listener to this function
function handleMessageTest (searchWord, sender, sendResponse) {

    var result = dictionary.queryAll("items", {
        query: function (row) {

            var pattern = new RegExp("\\b" + searchWord);
            if (pattern.test(row.cleanEnglish)) {

                return true;
            }


            return false;
        }
    });

    sendResponse(result);

}

// Vanilla Ajax
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){

        return false;
    }
    if (!req) {

        return false;
    }
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};

    req.onreadystatechange = function(){
        if(req .readyState == 4){

            return req.status === 200 ?
                success(req.responseText) : error(req.status)
            ;
        }
    };
    req.open("GET", url, true);
    req.send(null);

    return req;
}