// The word element class that replaces the normal text into a chinese word plus extra hover styling
let word = {

    replaceWord: function (originalWord, array, type) {

        let text = array[0][type]; // Simplified or Traditional
        text = " " + text + " "; // Add the two blank lines again b/c our pattern removes the spaces

        let hoverText = "";
        for (let i = 0; i < array.length; i++) {

            // Find out the color code
            // All these spans are for creating neat color coding based on the tone
            hoverText += "<span class='characterAndPinyin'>"; // This span makes sure that the character + pinyin stay on the same line
            let words = array[i]["pinyin"].split(" ");
            for (let c = 0; c < array[i][type].length; c++) {
                hoverText += "<span class='characterColor" + words[c].match(/\d/)[0] + "'>" + array[i][type][c] + "</span>";
            }

            hoverText += " <span class='pinyin'>" + pinyinToUnicodePinyin(array[i]["pinyin"]) + "</span>";
            hoverText += "</span>";
            hoverText += "<span class='english'>\n" + measureWordToPinyin(array[i]["english"] + "</span>") + "\n";
        }

        return  originalWord + "<span class='mt-character'>(" + text + ") <span class='hovertext'>" + hoverText + "</span></span> ";
    }
};

// In the English text, sometimes they add the measure word (CL)
function measureWordToPinyin (english) {

    return english.replace(/(\[.+?\])/gi, function(match, $1) {

        return "[" + pinyinToUnicodePinyin($1) + "]";
    });
}

// Translates pin1yin1 to Pīnyīn
function pinyinToUnicodePinyin (pinyin) {

    // Pinyin looks like [pin1 pin1]
    pinyin = pinyin.slice(1, -1);

    return pinyin.replace(/(\w{0,3})([aieuo]|u:|r)(\w{0,3})(\d)/gi, function (match, $1, $2, $3, $4) {

        // Source from http://pinyin.info/unicode/unicode_test.html
        let character = $2;
        switch ($2 + $4) {
            case "a1":
                character = "a&#772;";
                break;
            case "a2":
                character = "a&#769;";
                break;
            case "a3":
                character = "a&#780;";
                break;
            case "a4":
                character = "a&#768;";
                break;
            case "a": // No tone
                break;
            
            case "e1":
                character = "e&#772;";
                break;
            case "e2":
                character = "e&#769;";
                break;
            case "e3":
                character = "e&#780;";
                break;
            case "e4":
                character = "e&#768;";
                break;
            case "e": // No tone
                break;
            
            case "i1":
                character = "i&#772;";
                break;
            case "i2":
                character = "i&#769;";
                break;
            case "i3":
                character = "i&#780;";
                break;
            case "i4":
                character = "i&#768;";
                break;
            case "i": // No tone
                break;
            
            case "u1":
                character = "u&#772;";
                break;
            case "u2":
                character = "u&#769;";
                break;
            case "u3":
                character = "u&#780;";
                break;
            case "u4":
                character = "u&#768;";
                break;
            case "u": // No tone
                break;

            case "o1":
                character = "o&#772;";
                break;
            case "o2":
                character = "o&#769;";
                break;
            case "o3":
                character = "o&#780;";
                break;
            case "o4":
                character = "o&#768;";
                break;
            case "o": // No tone
                break;

            case "u:1": // Special u in pinyin
                character = "ü&#772;";
                break;
            case "u:2":
                character = "ü&#769;";
                break;
            case "u:3":
                character = "ü&#780;";
                break;
            case "u:4":
                character = "ü&#768;";
                break;
            case "u:": // No tone
                break;

            case "r5":
                character = "r"; // a no tone r
                break;

        }

        // For example, pu3 doesn't have capture group 3
        let result = $1 + character;
        if (typeof $3 !== "undefined") {
            result += $3;
        }

        return result;
    });
}