// Include in manifest.json, content_scripts to run
// For testing purposes only, useful for testing if the matches still work after changing some values
console.log("Starting Tests");

var items = [];
items.push(["using", 68643]); // 68643 is the ID of the correct word
items.push(["economic", 79024]); // The line numbers - 30 is the correct ID
items.push(["modern", 67470]);
items.push(["music", 108642]);
items.push(["popularly", 77693]);
items.push(["police", 93861]);
items.push(["golden", 101909]);
items.push(["female", 106471]);
items.push(["there", 100501]);
items.push(["medals", 66731]);
items.push(["define", 1657]);
items.push(["became", 94054]);
items.push(["largest", 25413]);
items.push(["album", 31316]); // TODO these two

for (var i = 0; i < items.length; i++) {
    performLookup(items[i]);
}

// When using search, comment out performLookup
// search("to use");

function performLookup (item) {
    chrome.extension.sendMessage(item[0], function (response) {
        console.log(response);
        if (response[0]["ID"] == item[1]) {
            console.log("Successfully matched: " + item[0]);
        } else {
            console.log("Bad match for: " + item[0]);

            for (var i = 0; i < response.length; i++) {
                console.log(response[i]["traditional"] + " - " + response[i]["total"] + " (" + response[i]["count"] +  " + "+ response[i]["relevance"]+ ") - " + response[i]["ID"]);
            }
        }
    });
}

function search (searchWord) {

    chrome.extension.sendMessage(searchWord, function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]["traditional"] + " - " + response[i]["english"]);
        }
    });
}



