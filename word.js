// The word element class that replaces the normal text into a chinese word plus extra hover styling
var word = {

    replaceWord: function (array) {

        var text = array[0]["traditional"];
        text = " " + text + " "; // Add the two blank lines again b/c our pattern removes the spaces

        var element = "<span>" + text +"</span>";

        return element;
    }
};