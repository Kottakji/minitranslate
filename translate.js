// Check if activated via the local storage, changed in the popup
chrome.storage.sync.get("active", function (result) {
    if (result["active"] !== false) {
        chrome.storage.sync.get("amount", function (result) {
            var amount = result["amount"];

            chrome.storage.sync.get("type", function (result) {
                var type = result["type"]; // Traditional or Simplified

                console.log('loaded');

                // Get some nouns from the text and translate a few of them to the selected language
                var pattern = / ([a-z]\w{4,}) /gm;

                var p = document.getElementsByTagName('p');
                first_loop:
                    for (var i = 0; i < p.length; i++) {

                        var matches = p[i].innerText.match(pattern);
                        if (matches == null) {
                            continue;
                        }
                        // First match = all
                        for (var j = 1; j < matches.length; j++) {
                            customReplace(matches[j], p[j-1]);

                            if (j > (amount -1)) {
                                break first_loop;
                            }
                        }
                    }

                function customReplace(match, element) {
                    //TODO somehow it doesn't replace all matches
                    //TODO (not here) if it's an adjective, 1 character is more important. If it is a noun, 2 chars is more important.
                    console.log(match);
                    chrome.extension.sendMessage(match.trim(), function (response) {
                        console.log(response);
                        element.innerHTML = element.innerHTML.replace(match, word.replaceWord(match, response, type));
                    });
                }

                console.log('finish');
            });
        });
    }
});





