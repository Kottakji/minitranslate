var containsVerb = false;

// <editor-fold desc="An array of irregular English verbs">
var irregular = [];
irregular["arose"] = ["arise"];
irregular["arisen"] = ["arise"];
irregular["awoke"] = ["awake"];
irregular["awoken"] = ["awake"];
irregular["bore"] = ["bear"];
irregular["borne"] = ["bear"];
irregular["beat"] = ["beat"];
irregular["beaten"] = ["beat"];
irregular["became"] = ["become"];
irregular["become"] = ["become"];
irregular["began"] = ["begin"];
irregular["begun"] = ["begin"];
irregular["bent"] = ["bend"];
irregular["beset"] = ["beset"];
irregular["bet"] = ["bet"];
irregular["betted"] = ["bet"];
irregular["bid"] = ["bid"];
irregular["bound"] = ["bind"];
irregular["bit"] = ["bite"];
irregular["bitten"] = ["bite"];
irregular["bled"] = ["bleed"];
irregular["blew"] = ["blow"];
irregular["blown"] = ["blow"];
irregular["broke"] = ["break"];
irregular["broken"] = ["break"];
irregular["bred"] = ["breed"];
irregular["brought"] = ["bring"];
irregular["built"] = ["build"];
irregular["burnt"] = ["burn"];
irregular["burned"] = ["burn"];
irregular["burst"] = ["burst"];
irregular["bought"] = ["buy"];
irregular["cast"] = ["cast"];
irregular["caught"] = ["catch"];
irregular["chose"] = ["choose"];
irregular["chosen"] = ["choose"];
irregular["clung"] = ["cling"];
irregular["came"] = ["come"];
irregular["crept"] = ["creep"];
irregular["dealt"] = ["deal"];
irregular["dug"] = ["dig"];
irregular["dived"] = ["dive"];
irregular["dove"] = ["dive"];
irregular["did"] = ["do"];
irregular["done"] = ["do"];
irregular["drew"] = ["draw"];
irregular["drawn"] = ["draw"];
irregular["dreamt"] = ["dream"];
irregular["dreamed"] = ["dream"];
irregular["drank"] = ["drink"];
irregular["drunk"] = ["drink"];
irregular["drove"] = ["drive"];
irregular["driven"] = ["drive"];
irregular["ate"] = ["eat"];
irregular["eaten"] = ["eat"];
irregular["fell"] = ["fall"];
irregular["fallen"] = ["fall"];
irregular["fed"] = ["feed"];
irregular["felt"] = ["feel"];
irregular["fought"] = ["fight"];
irregular["found"] = ["find"];
irregular["fled"] = ["flee"];
irregular["flung"] = ["fling"];
irregular["flew"] = ["fly"];
irregular["flown"] = ["fly"];
irregular["forbade"] = ["forbid"];
irregular["forbidden"] = ["forbid"];
irregular["forgot"] = ["forget"];
irregular["forgotten"] = ["forget"];
irregular["forgo"] = ["forego"];
irregular["forewent"] = ["forego"];
irregular["foregone"] = ["forego"];
irregular["forgave"] = ["forgive"];
irregular["forgiven"] = ["forgive"];
irregular["forsook"] = ["forsake"];
irregular["forsaken"] = ["forsake"];
irregular["foretold"] = ["foretell"];
irregular["froze"] = ["freeze"];
irregular["frozen"] = ["freeze"];
irregular["got"] = ["get"];
irregular["gotten"] = ["get"];
irregular["gave"] = ["give"];
irregular["given"] = ["give"];
irregular["went"] = ["go"];
irregular["gone"] = ["go"];
irregular["ground"] = ["grind"];
irregular["grew"] = ["grow"];
irregular["grown"] = ["grow"];
irregular["hung"] = ["hang"];
irregular["hanged"] = ["hang"];
irregular["had"] = ["have"];
irregular["heard"] = ["hear"];
irregular["hid"] = ["hide"];
irregular["hidden"] = ["hide"];
irregular["hit"] = ["hit"];
irregular["held"] = ["hold"];
irregular["hurt"] = ["hurt"];
irregular["kept"] = ["keep"];
irregular["knelt"] = ["kneel"];
irregular["knew"] = ["know"];
irregular["known"] = ["know"];
irregular["laid"] = ["lay"];
irregular["led"] = ["lead"];
irregular["leant"] = ["lean"];
irregular["leaned"] = ["lean"];
irregular["leapt"] = ["leap"];
irregular["leaped"] = ["leap"];
irregular["learnt"] = ["learn"];
irregular["learned"] = ["learn"];
irregular["left"] = ["leave"];
irregular["lent"] = ["lend"];
irregular["lay"] = ["lie"];
irregular["lain"] = ["lie"];
irregular["lit"] = ["light"];
irregular["lighted"] = ["light"];
irregular["lost"] = ["lose"];
irregular["made"] = ["make"];
irregular["meant"] = ["mean"];
irregular["met"] = ["meet"];
irregular["misspelt"] = ["misspell"];
irregular["misspelled"] = ["misspell"];
irregular["mistook"] = ["mistake"];
irregular["mistaken"] = ["mistake"];
irregular["mowed"] = ["mow"];
irregular["mown"] = ["mow"];
irregular["overcame"] = ["overcome"];
irregular["overdid"] = ["overdo"];
irregular["overdone"] = ["overdo"];
irregular["overtook"] = ["overtake"];
irregular["overtaken"] = ["overtake"];
irregular["overthrew"] = ["overthrow"];
irregular["overthrown"] = ["overthrow"];
irregular["paid"] = ["pay"];
irregular["pleaded"] = ["plead"];
irregular["proved"] = ["prove"];
irregular["proven"] = ["prove"];
irregular["rode"] = ["ride"];
irregular["ridden"] = ["ride"];
irregular["rang"] = ["ring"];
irregular["rung"] = ["ring"];
irregular["rose"] = ["rise"];
irregular["risen"] = ["rise"];
irregular["ran"] = ["run"];
irregular["sawed"] = ["saw"];
irregular["sawn"] = ["saw"];
irregular["said"] = ["say"];
irregular["saw"] = ["see"];
irregular["seen"] = ["see"];
irregular["sought"] = ["seek"];
irregular["sold"] = ["sell"];
irregular["sent"] = ["send"];
irregular["sewed"] = ["sew"];
irregular["sewn"] = ["sew"];
irregular["shook"] = ["shake"];
irregular["shaken"] = ["shake"];
irregular["sheared"] = ["shear"];
irregular["shorn"] = ["shear"];
irregular["shone"] = ["shine"];
irregular["shot"] = ["shoot"];
irregular["showed"] = ["show"];
irregular["shown"] = ["show"];
irregular["shrank"] = ["shrink"];
irregular["shrunk"] = ["shrink"];
irregular["shut"] = ["shut"];
irregular["sang"] = ["sing"];
irregular["sung"] = ["sing"];
irregular["sank"] = ["sink"];
irregular["sunk"] = ["sink"];
irregular["sat"] = ["sit"];
irregular["slept"] = ["sleep"];
irregular["slew"] = ["slay"];
irregular["slayed"] = ["slay"];
irregular["slain"] = ["slay"];
irregular["slid"] = ["slide"];
irregular["slung"] = ["sling"];
irregular["smelt"] = ["smell"];
irregular["smelled"] = ["smell"];
irregular["smote"] = ["smite"];
irregular["smitten"] = ["smite"];
irregular["sowed"] = ["sow"];
irregular["sown"] = ["sow"];
irregular["spoke"] = ["speak"];
irregular["spoken"] = ["speak"];
irregular["sped"] = ["speed"];
irregular["speeded"] = ["speed"];
irregular["spelt"] = ["spell"];
irregular["spelled"] = ["spell"];
irregular["spent"] = ["spend"];
irregular["spilt"] = ["spill"];
irregular["spilled"] = ["spill"];
irregular["spun"] = ["spin"];
irregular["spat"] = ["spit"];
irregular["spoilt"] = ["spoil"];
irregular["spoiled"] = ["spoil"];
irregular["sprang"] = ["spring"];
irregular["sprung"] = ["spring"];
irregular["stood"] = ["stand"];
irregular["stole"] = ["steal"];
irregular["stolen"] = ["steal"];
irregular["stuck"] = ["stick"];
irregular["stung"] = ["sting"];
irregular["stank"] = ["stink"];
irregular["stunk"] = ["stink"];
irregular["strode"] = ["stride"];
irregular["stridden"] = ["stride"];
irregular["struck"] = ["strike"];
irregular["strove"] = ["strive"];
irregular["striven"] = ["strive"];
irregular["swore"] = ["swear"];
irregular["sworn"] = ["swear"];
irregular["swept"] = ["sweep"];
irregular["swelled"] = ["swell"];
irregular["swollen"] = ["swell"];
irregular["swam"] = ["swim"];
irregular["swum"] = ["swim"];
irregular["swung"] = ["swing"];
irregular["took"] = ["take"];
irregular["taken"] = ["take"];
irregular["taught"] = ["teach"];
irregular["tore"] = ["tear"];
irregular["torn"] = ["tear"];
irregular["told"] = ["tell"];
irregular["thought"] = ["think"];
irregular["throve"] = ["thrive"];
irregular["thrived"] = ["thrive"];
irregular["threw"] = ["throw"];
irregular["thrown"] = ["throw"];
irregular["thrust"] = ["thrust"];
irregular["trod"] = ["tread"];
irregular["trodden"] = ["tread"];
irregular["understood"] = ["understand"];
irregular["upheld"] = ["uphold"];
irregular["woke"] = ["wake"];
irregular["waked"] = ["wake"];
irregular["wore"] = ["wear"];
irregular["worn"] = ["wear"];
irregular["wove"] = ["weave"];
irregular["weaved"] = ["weave"];
irregular["wedded"] = ["wed"];
irregular["wed"] = ["wed"];
irregular["wept"] = ["weep"];
irregular["won"] = ["win"];
irregular["wound"] = ["wind"];
irregular["withdrew"] = ["withdraw"];
irregular["withdrawn"] = ["withdraw"];
irregular["withheld"] = ["withhold"];
irregular["withstood"] = ["withstand"];
irregular["wrung"] = ["wring"];
irregular["wrote"] = ["write"];
irregular["written"] = ["write"];
// </editor-fold>

// <editor-fold desc="An array of irregular English superlatives">
var superlatives = [];
superlatives["good"] = "better";
superlatives["good"] = "best";
superlatives["bad"] = "worse";
superlatives["bad"] = "worst";
superlatives["far"] = "farther";
superlatives["far"] = "further";
superlatives["far"] = "farthest";
superlatives["far"] = "furthest";
superlatives["well"] = "better";
superlatives["well"] = "best";
superlatives["little"] = "less";
superlatives["little"] = "least";
// </editor-fold>

function searchWordOptimization (word) {

    var result = [];
    containsVerb = false;

    // First check if it is an irregular verb and change it back to it's base form
    for (var item in irregular) {
        if (item == word) {
            result.push(irregular[item]);
            result.push("to " + irregular[item]); // Specifically for verbs
            containsVerb = true;

            return result;
        }
    }

    // Check the superlative exceptions
    for (var item in superlatives) {
        if (item == word) {
            result.push(superlatives[item]);

            return result;
        }
    }

    // If we want to support more languages, change it here

    // Remove -ly etc if it contains that etc for each language to get the base of the word
    // Countries to Country etc
    // Happily to Happy etc

    // English Plural
    // Source: http://users.monash.edu/~damian/papers/HTML/Plurals.html

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

    // Superlatives - large, larger, largest
    // 1 syllable = +er or +est and sometimes the final consonant should be doubled
    result.push(word.replace(/(\w+?)er\b/, "$1")); // higher -> high
    result.push(word.replace(/(\w+?)er\b/, "$1e")); // larger -> large
    result.push(word.replace(/(\w+?)est\b/, "$1")); // highest -> high
    result.push(word.replace(/(\w+?)est\b/, "$1e")); // largest -> large

    result.push(word.replace(/([a-z])(\1)er\b/, "$1")); // bigger -> big
    result.push(word.replace(/([a-z])(\1)er\b/, "$1$2")); // taller -> tall
    result.push(word.replace(/([a-z])(\1)est\b/, "$1")); // tallest -> tall
    result.push(word.replace(/([a-z])(\1)est\b/, "$1$2")); // biggest -> tall

    // Two syllables
    result.push(word.replace(/(\w+?)ier\b/, "$1y")); // busier -> busy
    result.push(word.replace(/(\w+?)iest\b/, "$1y")); // busiest -> busy
    result.push(word.replace(/(\w+?)er\b/, "$1e")); // simpler -> simple
    result.push(word.replace(/(\w+?)ier\b/, "$1y")); // simpler -> simple

    // -ly
    result.push(word.replace(/(\w+?)ly\b/, "$1"));

    // In case we get some conjugated verbs in there
    // Note, this doesn't prevent us from irregular verbs to get mixed in there, but most shouldn't come here
    // We should remember that there is a verb, because we want to change our search later on, forcing to look for "to verb"
    if (word.match(/(\w+?)ing\b/)) {
        containsVerb = true;
        result.push(word.replace(/(\w+?)ing\b/, "$1"));
        result.push(word.replace(/(\w+?)ing\b/, "$1e")); // using -> use, notice -> noticing etc
        result.push("to " + word.replace(/(\w+?)ing\b/, "$1")); // Specifically for verbs
        result.push("to " + word.replace(/(\w+?)ing\b/, "$1e")); // Specifically for verbs
    }

    // Word + ed could actually be an adjective as well, but it is ok to treat it as a verb here
    // http://www.englishpage.com/gerunds/adjective_infinitive_list.htm
    if (word.match(/(\w+?)ed\b/)) {
        containsVerb = true;
        result.push(word.replace(/(\w+?)ed\b/, "$1"));
        result.push(word.replace(/(\w+?)ed\b/, "$1e")); // Released -> release
        result.push("to " + word.replace(/(\w+?)ed\b/, "$1")); // Specifically for verbs
        result.push("to " + word.replace(/(\w+?)ed\b/, "$1e")); // Released -> to release
    }

    // Remove all duplicates
    return result.filter(function (item, pos) {return result.indexOf(item) == pos});
}

// Give each word a value
// If the Hanzi is short, that is better
// If the English is short, that is better
// If it matches correctly or between / it is good
function calculateValue (entry, searchWords) {

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
            count += 28;
            break;
        case 3:
            count += 38;
            break;
        case 4:
            count += 48;
            break;
        default:
            count += 58;
    }

    var splitted = entry["english"].split("/");
    switch (splitted.length) {
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
            count += 6;
            break;
        case 5:
            count += 7;
            break;
        default:
            count += 8;
    }

    // If the word occurs within all splitted words, then it must be quite accurate
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i].indexOf(searchWords[0]) != -1) {
            count -= 2;
        }
    }

    // Only set the minus points once
    var minus = (function () {
        var counter = 0;

        return function (number) {

            if (counter < number) {
               counter = number;
            }

            return counter;
        }
    })();

    var add = (function () {
        var counter = 0;

        return function (number) {

            if (counter < number) {
               counter = number;
            }

            return counter;
        }
    })();

    for (var i = 0; i < searchWords.length; i++) {


        // Count the length of the text in which the string occurred (within /)
        // Some words are found in long sentences describing many things, but not meaning the actual word
        var regex = new RegExp("(\\/?(.?(?!\\/))+" + searchWords[i] + "(\\/|.+?\\/|$|.+$))", "igm");
        var result = regex.exec(entry["cleanEnglish"]);
        if (result != null) {
            add(result[0].length - searchWords[i].length);
        }

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

        if (entry["cleanEnglish"] == searchWords[i]) {
            minus(25);
            continue;
        }

        // Sometimes there are some additional options added in the english entry,
        // For example in : 政府 [zheng4 fu3] /government/CL:個|个[ge4]/
        // So, if we remove the CL:... we can also get a perfect match
        var r0 = new RegExp("^"+ searchWords[i] +"\\/CL");
        if (r0.test(entry["cleanEnglish"])) {
            minus(25);
            continue;
        }

        // Sometimes there are words with additional information within ()
        var r1 = new RegExp("^"+ searchWords[i] +" \\(.+?\\)");
        if (r1.test(entry["cleanEnglish"])) {
            minus(25);
            continue;
        }

        // Remember, to escape a /, normally requires \/, but js requires \\/....
        var r2 = new RegExp("^"+ searchWords[i] +"\\/");
        if (r2.test(entry["cleanEnglish"])) {
            minus(18);
            continue;
        }

        var r3 = new RegExp("\\/" + searchWords[i] + "\\/");
        if (r3.test(entry["cleanEnglish"])) {
            minus(16);
            continue;
        }

        var r4 = new RegExp("\\/" + searchWords[i] + "\\b[^ \\w]");
        if (r4.test(entry["cleanEnglish"])) {
            minus(14);
            continue;
        }

        var r5 = new RegExp("^" + searchWords[i] + "\\b ");
        if (r5.test(entry["cleanEnglish"])) {
            minus(12);
            continue;
        }

        var r6 = new RegExp("\\/\\b" + searchWords[i] + "\\b .+?(?=\\/)");
        if (r6.test(entry["cleanEnglish"])) {
            minus(7);
            continue;
        }

        var r7 = new RegExp("\\/\\b" + searchWords[i] + "\\b .+?");
        if (r7.test(entry["cleanEnglish"])) {
            minus(5);
            continue;
        }

        var r8 = new RegExp("\\b" + searchWords[i] + "\\b");
        if (r8.test(entry["cleanEnglish"])) {
            minus(3);
        }
    }

    entry["minus"] = minus(); // We use this in the searchWordRelevancy function

    count -= minus();
    count += add();

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

    // Just push it up to 0, to make similar ones also appear
    if (count < 0) {
        count = 0;
    }

    entry["count"] = count;

    return count;
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

                            // Depending on the length of the characters, add a relevancy point
                            itemArray[i]["relevance"] += (itemArray[i]["traditional"].length - 1) * 15 + 1;
                        } else {

                            itemArray[i]["relevance"] = 0;
                        }
                    }
                }
            }
        }
    }

    itemArray.sort(function (a, b) {

        // Items with no relevance should be penalized
        if (a["relevance"] > 0) {
            // High count is bad, high relevance is good. The lowest total is good.
            a["total"] = a["count"] - (Math.floor(Math.sqrt(a["relevance"])));
        }   else {
            // Don't penalize words who are very accurate
            if (a["minus"] <= 5) {
                a["total"] = (a["count"] * 3) + 2;
            } else {
                a["total"] = a["count"];
            }
        }

        // Items with no relevance should be penalized
        if (b["relevance"] > 0) {
            // High count is bad, high relevance is good. The lowest total is good.
            b["total"] = b["count"] - (Math.floor(Math.sqrt(b["relevance"])));
        }   else {
            if (b["minus"] <= 5) {
                b["total"] = (b["count"] * 3) + 2;
            } else {
                b["total"] = b["count"];
            }
        }

        if (a["total"] > b["total"]) {

            return 1;
        }

        if (a["total"] == b["total"]) {
            if (a["relevance"] < b["relevance"]) { // Higher relevance is the decisive factor if the totals are equal

                return 1;
            }
        }

        return - 1;
    });

    // Filter out the ones with a big count difference, compared with the lowest. It is most likely an irrelevant entry
    if (itemArray.length > 0) {
        var lowestCount = itemArray[0]["total"];
        itemArray = itemArray.filter (function (item) {

            return !(item["total"] > lowestCount + 5);
        });
    }

    return itemArray;
}
