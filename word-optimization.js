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
