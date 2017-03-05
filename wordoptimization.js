function searchWordOptimization(word) {

    // If we want to support more languages, change it here

    // Remove -ly etc if it contains that etc for each language to get the base of the word
    // Countries to Country etc
    // Happily to Happy etc
    
    
    return word;
}

// Returns a word from the selected array
// Later we might show the first three or so additional meanings, as in Chinese there might be alternative correct ones
function wordSelection(itemArray, searchWord) {

    // Our comparing function
    var compare = function(dictResult) {

        if (dictResult === searchWord) {

            return 1;
        }

        // Match the beginning of the string with a / at the end
        var regex1 = new RegExp("^" + searchWord + "\/");
        if (regex1.test(dictResult)) {

            return 200 + dictResult.length;
        }

        // Match the beginning of the string with a / at the beginning
        var regex2 = new RegExp("\/" + searchWord);
        if (regex2.test(dictResult)) {

            return 300 + dictResult.length;
        }

        return 400;
    };

    itemArray.sort(function(a, b) {
        // The English text in the dict is split by /, so match a full string on it
        // Order: Just the word.
        if (compare(a["english"]) < compare(b["english"])) {

            return -1;
        }

        return 1;
    });

    return itemArray[0]["traditional"];
}
