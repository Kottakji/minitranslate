// Include in manifest.json, content_scripts to run
// For testing purposes only, useful for testing if the matches still work after changing some values
console.log("Starting Tests");

let items = [];
items.push(["station", 63585]); // TODO this one, but will be difficult
items.push(["competition", 47401]);
items.push(["there", 85026]);
items.push(["using", 57324]); // 68643 is the ID of the correct word
items.push(["economic", 66386]); // The line numbers - 30 is the correct ID
items.push(["modern", 56330]);
items.push(["music", 91750]);
items.push(["popularly", 65221]);
items.push(["police", 79146]);
items.push(["golden", 86231]);
items.push(["female", 89962]);
items.push(["medals", 55718]);
items.push(["define", 1041]);
items.push(["became", 79336]);
items.push(["largest", 21146]);
items.push(["album", 25853]);

for (let item of items) {
    chrome.runtime.sendMessage(item[0], function (response) {
        console.log('----');
        console.log(item[0]);
        console.log(response);
    });
}



