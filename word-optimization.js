let containsVerb = false;

// <editor-fold desc="An array of irregular English verbs">
let irregular = [];
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
let superlatives = [];
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

// Give each word a value
// If the Hanzi is short, that is better
// If the English is short, that is better
// If it matches correctly or between / it is good
function calculateValue(entry, searchWord) {

    let count = 0;
    switch (entry["traditional"].length) {
        case 0:
            count += 0;
            break;
        case 1:
            count += 15;
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

    let splitted = entry["english"].split("/");
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
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].includes(searchWord)) {
            count -= 2;
        }
    }

    // Count the length of the text in which the string occurred (within /)
    // Some words are found in long sentences describing many things, but not meaning the actual word
    try {

        let expr = "(\/?(.?(?!\\/))+" + searchWord + "(\\/|.+?\\/|$|.+$))";
        let regex = new RegExp(expr, "igm");
        let result = regex.exec(entry["cleanEnglish"]);
        if (result != null) {
            count += result[0].length - searchWord.length;
        }
    } catch (error) {
        console.log("Problem with the regex for " + searchWord);
        console.log(error);
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

    if (entry["cleanEnglish"] === searchWord) {

        return returnCalculateValue(count - 25);
    }

    // Sometimes there are some additional options added in the english entry,
    // For example in : 政府 [zheng4 fu3] /government/CL:個|个[ge4]/
    // So, if we remove the CL:... we can also get a perfect match
    let r0 = new RegExp("^" + searchWord + "\\/CL");
    if (r0.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 25);
    }

    // Sometimes there are words with additional information within ()
    let r1 = new RegExp("^" + searchWord + " \\(.+?\\)");
    if (r1.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 25);
    }

    // Remember, to escape a /, normally requires \/, but js requires \\/....
    let r2 = new RegExp("^" + searchWord + "\\/");
    if (r2.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 18);
    }

    let r3 = new RegExp("\\/" + searchWord + "\\/");
    if (r3.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 16);
    }

    let r4 = new RegExp("\\/" + searchWord + "\\b[^ \\w]");
    if (r4.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 14);
    }

    let r5 = new RegExp("^" + searchWord + "\\b ");
    if (r5.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 12);
    }

    let r6 = new RegExp("\\/\\b" + searchWord + "\\b .+?(?=\\/)");
    if (r6.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 7);
    }

    let r7 = new RegExp("\\/\\b" + searchWord + "\\b .+?");
    if (r7.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 5);
    }

    let r8 = new RegExp("\\b" + searchWord + "\\b");
    if (r8.test(entry["cleanEnglish"])) {

        return returnCalculateValue(count - 3);
    }


    return returnCalculateValue(count);
}

function returnCalculateValue(count) {
    if (count < 0) {
        count = 0;
    }

    return count;
}

function compareRelevancy(a, b) {

    let aRelevancy = 0;
    let bRelevancy = 0;
    let request = window.indexedDB.open("dictionary", 1);
    request.onsuccess = function (event) {
        let db = event.target.result;
        let transaction4 = db.transaction(["items"], "readonly");
        let itemObjectStore = transaction4.objectStore("items");

        itemObjectStore.openCursor().onsuccess = function (e) {
            let cursor = e.target.result;
            if (cursor) {
                if (cursor.value.traditional.includes(a.traditional)) {
                    if (cursor.value.english.includes(a.english)) {
                        aRelevancy += (cursor.value.length - 1) * 15 + 1;
                    }
                }
                if (cursor.value.traditional.includes(b.traditional)) {
                    if (cursor.value.english.includes(b.english)) {
                        bRelevancy += (cursor.value.length - 1) * 15 + 1;
                    }
                }
                cursor.continue();
            }
        };

        // Sort it depending on the points and the relevancy
        let aTotal = 0;
        let bTotal = 0;

        // FOR A Items with no relevancy should be penalized
        if (aRelevancy > 0) {
            // High count is bad, high relevance is good. The lowest total is good
            aTotal = a.points - (Math.floor(Math.sqrt(aRelevancy)));
        } else {
            if (a.points <= 5) {
                aTotal = 6;
            } else {
                aTotal = a.count + 10;
            }
        }

        // FOR B Items with no relevancy should be penalized
        if (bRelevancy > 0) {
            // High count is bad, high relevance is good. The lowest total is good
            bTotal = b.points - (Math.floor(Math.sqrt(bRelevancy)));
        } else {
            if (b.points <= 5) {
                bTotal = 6;
            } else {
                bTotal = b.count + 10;
            }
        }

        if (aTotal > bTotal) {
            return 1;
        }

        if (aTotal === bTotal) {
            if (aRelevancy < bRelevancy) { // Higher relevance is the decisive factor if the totals are equal

                return 1
            }
        }

        return -1;
    };
}
