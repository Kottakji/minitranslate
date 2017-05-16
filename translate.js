// Check if activated via the local storage, changed in the popup
chrome.storage.sync.get("active", function (result) {
    if (result["active"] !== false) {
        chrome.storage.sync.get("amount", function (result) {
            var amount = result["amount"];

            chrome.storage.sync.get("type", function (result) {
                var type = result["type"]; // Traditional or Simplified

                var customReplace = (function () {
                    var searched = [];

                    return function(match, element) {
                        // Checks for duplicates
                        if (searched.lastIndexOf(match) == -1) {
                            searched.push(match);

                            chrome.runtime.sendMessage(match.trim(), function (response) {
                                if (response != null && response.length > 0) {
                                    element.innerHTML = element.innerHTML.replace(match, word.replaceWord(match, response, type));
                                }
                            });
                        }
                    }
                })();

                // Get some nouns from the text and translate a few of them to the selected language
                var pattern = / ([a-z]\w{4,}) /gm;

                var p = document.getElementsByTagName('p');
                var count = 0;
                first_loop:
                    for (var i = 0; i < p.length; i++) {

                        // Remove all the links from the text, as we don't want a character appearing inside a link
                        var clone = p[i].cloneNode(true);
                        var links = clone.getElementsByTagName("a");
                        while (links.length > 0) {
                            links[0].parentNode.removeChild(links[0]);
                        }

                        var matches = clone.innerText.match(pattern);
                        if (matches == null) {

                            continue;
                        }

                        for (var j = 1; j < matches.length; j++) {
                            customReplace(matches[j], p[i]);
                            count ++;
                            
                            if (count > (amount -1)) {
                                break first_loop;
                            }

                            // It would do everything in the first paragraph if we don't skip it here
                            // Depending on if there are enough paragraphs
                            if (p.length * j >= 7) {

                                break;
                            }
                        }
                    }
            });
        });
    }
});
