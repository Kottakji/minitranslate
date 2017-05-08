var containsVerb = false;

function searchWordOptimization (word) {

    containsVerb = false;

    // If we want to support more languages, change it here

    // Remove -ly etc if it contains that etc for each language to get the base of the word
    // Countries to Country etc
    // Happily to Happy etc

    // English Plural
    // Source: http://users.monash.edu/~damian/papers/HTML/Plurals.html

    var result = [];
    result.push(word); // Always added!

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
    result.push(word.replace(/(\w+?)ly\b/, "$1"));

    // In case we get some conjugated verbs in there
    // Note, this doesn't prevent us from irregular verbs to get mixed in there, but most shouldn't come here
    // We should remember that there is a verb, because we want to change our search later on, forcing to look for "to verb"
    if (word.match(/(\w+?)ing\b/)) {
        containsVerb = true;
        result.push(word.replace(/(\w+?)ing\b/, "$1"));
    }

    // Word + ed could actually be an adjective as well, but it is ok to treat it as a verb here
    // http://www.englishpage.com/gerunds/adjective_infinitive_list.htm
    if (word.match(/(\w+?)ed\b/)) {
        containsVerb = true;
        result.push(word.replace(/(\w+?)ed\b/, "$1"));
    }

    // Remove all duplicates
    return result.filter(function (item, pos) {return result.indexOf(item) == pos});
}

// Returns a sorted array from the selected array
// Later we might show the first three or so additional meanings, as in Chinese there might be alternative correct ones
function wordSortation (dictionary, itemArray, searchWords) {

    // Give each word a value
    // If the Hanzi is short, that is better
    // If the English is short, that is better
    // If it matches correctly or between / it is good
    var compare = function (entry) {

        var count = 0;

        switch (entry["traditional"].length) {
            case 0:
                count += 0;
                break;
            case 1:
                // If it's an adjective or a verb, it should most likely be a 1 length Chinese character
                // Adjectives/verbs are most likely the chanced words from above in the searchWordOptimization function
                // Therefore we can easily check the searchWords count to see, with reasonable accuracy, if it really is
                if (searchWords.length > 1) {
                    count += 15;
                } else {
                    count += 36;
                }
                break;
            case 2:
                count += 36;
                break;
            case 3:
                count += 50;
                break;
            case 4:
                count += 60;
                break;
            default:
                count += 70;
        }

        switch (entry["english"].split("/").length) {
            case 0:
                count += 0;
                break;
            case 1:
                count += 0;
                break;
            case 2:
                count += 2;
                break;
            case 3:
                count += 4;
                break;
            case 4:
                count += 8;
                break;
            case 5:
                count += 14;
                break;
            default:
                count += 20;
        }

        for (var i = 0; i < searchWords.length; i++) {

            /**
             *  The order is based on this scheme
             *  popular
             *  popular/CL:
                popular/something
                something/popular/something
                something/something/popular

                popular something/something
                something/popular something/something
                something/something/popular something
                something/something/something popular
                popularly
             */

            if (entry["english"] == searchWords[i]) {
                count = 0;
                break;
            }

            // Sometimes there are some additional options added in the english entry,
            // For example in : 政府 [zheng4 fu3] /government/CL:個|个[ge4]/
            // So, if we remove the CL:... we can also get a perfect match
            var r0 = new RegExp("^"+ searchWords[i] +"\\/CL");
            if (r0.test(entry["english"])) {
                count = 0;
                break;
            }

            // Remember, to escape a /, normally requires \/, but js requires \\/....
            var r1 = new RegExp("^"+ searchWords[i] +"\\/");
            if (r1.test(entry["english"])) {
                count -= 25;
                continue;
            }

            var r2 = new RegExp("\\/" + searchWords[i] + "\\/");
            if (r2.test(entry["english"])) {
                count -= 23;
                continue;
            }

            var r3 = new RegExp("\\/" + searchWords[i] + "\\b[^ \\w]");
            if (r3.test(entry["english"])) {
                count -= 22;
                continue;
            }

            var r4 = new RegExp("^" + searchWords[i] + "\\b ");
            if (r4.test(entry["english"])) {
                count -= 9;
                continue;
            }

            var r5 = new RegExp("\\/\\b" + searchWords[i] + "\\b .+?(?=\\/)");
            if (r5.test(entry["english"])) {
                count -= 7;
                continue;
            }

            var r6 = new RegExp("\\/\\b" + searchWords[i] + "\\b .+?");
            if (r6.test(entry["english"])) {
                count -= 5;
                continue;
            }

            var r7 = new RegExp("\\b" + searchWords[i] + "\\b");
            if (r7.test(entry["english"])) {
                count -= 3;
                continue;
            }
        }

        // Additional for verbs
        // If the entry doesn't have "to" in front of the verb, it's a bad match
        if (containsVerb) {

            // We give all that don't match +25 (but we first add it, then detract it)
            count += 25;
            for (var i = 0; i < searchWords.length; i++) {

                var r8 = new RegExp("to " +searchWords[i] + ".?\\b");
                if (r8.test(entry["english"])) {
                    count -= 25;
                    break;
                }
            }
        }

        entry["count"] = count;

        return count;
    };


    itemArray.sort(function (a, b) {
        // The English text in the dict is split by /, so match a full string on it
        // Order: Just the word.
        if (compare(a) > compare(b)) {

            return 1;
        }

        return -1;
    });
    
    return searchWordRelevancy(dictionary, itemArray.slice(0,30), searchWords);
}

// Search each possible word in the database to check for the occurrences and relevancy
function searchWordRelevancy (dictionary, itemArray, searchWords) {

    // Double search here, but couldn't find a way to do it directly within the query...
    var result = dictionary.queryAll("items", {
        query: function (row) {
            for (var i = 0; i < itemArray.length; i++) {
                if (row.traditional.indexOf(itemArray[i]["traditional"]) !== -1) {

                    return true
                }
            }

            return false;
        }
    });

    // Check if the traditional occurrences and then check if the english search word is in it
    for (var r = 0; r < result.length; r++) {
        for (var i = 0; i < itemArray.length; i++) {
            if (result[r]["traditional"].indexOf(itemArray[i]["traditional"]) !== -1) {
                for (var s = 0; s < searchWords.length; s++) {
                    if (result[r]["english"].indexOf(searchWords[s]) !== -1) {
                        if (typeof itemArray[i]["relevance"] !== "undefined") {

                            itemArray[i]["relevance"]++;
                        } else {

                            itemArray[i]["relevance"] = 0;
                        }
                    }
                }
            }
        }
    }

    // Remove items with no relevance
    itemArray = itemArray.filter (function (item) {

        return (item["relevance"] != 0);
    });

    // Could be empty by now
    if (itemArray.length == 0) {

        return itemArray;
    }


    itemArray.sort(function (a, b) {
        // High count is bad, high relevance is good. The lowest total is good.
        if (a["count"] - (Math.floor(Math.sqrt(a["relevance"]))) > b["count"] - (Math.floor(Math.sqrt(b["relevance"])))) {

            return 1;
        }

        return -1;
    });

    // Filter out the ones with a big count difference, compared with the lowest. It is most likely an irrelevant entry
    var lowestCount = itemArray[0]["count"];
    itemArray = itemArray.filter (function (item) {

        return !(item["count"] > lowestCount + 15);
    });

    return itemArray;
}
