function searchWordOptimization(word) {

    // If we want to support more languages, change it here

    // Remove -ly etc if it contains that etc for each language to get the base of the word
    // Countries to Country etc
    // Happily to Happy etc

    // English Plural
    // Source: http://users.monash.edu/~damian/papers/HTML/Plurals.html

    var result = [];
    result.push(word);

    result.push(word.replace(/(\w+?)(as|ae|ata)\b/, "$2a"));

    result.push(word.replace(/(\w+?)en\b/, "$1an"));

    result.push(word.replace(/(\w+?)ches\b/, "$ch"));

    result.push(word.replace(/(\w+?)(eaus|eaux)\b/, "$1eau"));

    result.push(word.replace(/(\w+?)(ens|ina)\b/, "$1en"));

    result.push(word.replace(/(\w+?)(exes|ices)\b/, "$1ex"));

    result.push(word.replace(/(\w+?)ves\b/, "$1f"));
    result.push(word.replace(/(\w+?)ves\b/, "$1fe"));

    result.push(word.replace(/(\w+?)(ieus|ieux)\b/, "$1ieus"));

    result.push(word.replace(/(\w+?)(es|ises|ides)\b/, "$1is"));

    result.push(word.replace(/(\w+?)(ixes|ices)\b/, "$1ix"));

    result.push(word.replace(/(\w+?)(nxes|nges)\b/, "$1nx"));

    result.push(word.replace(/(\w+?)(oes|os|i)\b/, "$1o"));

    result.push(word.replace(/(\w+?)(ons|a)\b/, "$1on"));

    result.push(word.replace(/(\w+?)(oofs|ooves)\b/, "$1oof"));

    result.push(word.replace(/(\w+?)ses\b/, "$1s"));

    result.push(word.replace(/(\w+?)shes\b/, "$1sh"));

    result.push(word.replace(/(\w+?)(a|ums)\b/, "$1um"));

    result.push(word.replace(/(\w+?)(era|i|uses|ora|us)\b/, "$1us"));

    result.push(word.replace(/(\w+?)xes\b/, "$1x"));

    result.push(word.replace(/(\w+?)ies\b/, "$1y"));

    result.push(word.replace(/(\w+?)zoa\b/, "$1zoon"));

    result.push(word.replace(/(\w+?)(s|im)\b/, "$1")); // Is this one necessary?

    result.push(word.replace(/(\w+?)ee(\w+)/, "$1oo$2")); // foot -> feet, tooth, teeth

    // End plural

    // -ly
    result.push(word.replace(/(\w+?)ly/, "$1"));

    // Remove all duplicates
    return result.filter(function (item, pos) {return result.indexOf(item) == pos});
}

// Returns a sorted array from the selected array
// Later we might show the first three or so additional meanings, as in Chinese there might be alternative correct ones
function wordSortation(itemArray, searchWord) {

    // Our comparing function
    var compare = function(dictResult) {

        if (dictResult === searchWord) {

            return 1;
        }
        // TODO refer -> referring matches, make sure the beginning and end of the string only matches
        // Match the end of the string with a /
        var regex1 = new RegExp("\b" + searchWord + "\b\/");
        if (regex1.test(dictResult)) {

            return 200 + dictResult.length;
        }

        // Match the beginning of the string with a /
        var regex2 = new RegExp("\/\b" + searchWord + "\b");
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
    
    return itemArray.slice(0,3);
}
