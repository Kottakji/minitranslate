// The word element class that replaces the normal text into a chinese word plus extra hover styling
var word = {

    replaceWord: function (originalWord, array, type) {

        var text = array[0][type]; // Simplified or Traditional
        text = " " + text + " "; // Add the two blank lines again b/c our pattern removes the spaces

        var tooltipText = "";
        for (var i = 0; i < array.length; i++) {
            tooltipText += array[i][type] + ": " + array[i]["english"] + "\n";
        }

        var element = originalWord + "<span class='character' title='" + tooltipText + "'> (" + text + ") </span>";

        return element;
    }
};