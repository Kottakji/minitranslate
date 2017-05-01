// The word element class that replaces the normal text into a chinese word plus extra hover styling
var word = {

    replaceWord: function (originalWord, array, type) {

        var text = array[0][type];
        text = " " + text + " "; // Add the two blank lines again b/c our pattern removes the spaces

        var element = originalWord + "<span> (" + text +") </span>";

        return element;
    }
};