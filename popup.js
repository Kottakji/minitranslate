var enabledTitle = "MiniTranslate - Chinese";
var disabledTitle = "MiniTranslate - Chinese (disabled)";
var enabledIcon = "icons/favicon.png";
var disabledIcon = "icons/favicon_disabled.png";

window.onload = function () {

    var button = document.getElementById("toggle");
    var fillButtons = document.getElementsByClassName("button-fill");
    var textButtons = document.getElementsByClassName("button-text");

    // The enable button styling
    button.onclick = function () {
        toggleStyling();
    };

    // The popup.js resets itself, therefore we toggle it in the start if disabled
    chrome.storage.sync.get("active", function (result) {
        if (typeof result === "undefined" || result["active"] === false) {
            toggleStyling();
        }
    });

    function toggleStyling() {
        for (var i = 0; i < fillButtons.length; i++) {
            fillButtons[i].classList.toggle("red");
            fillButtons[i].classList.toggle("green");
        }
        for (var i = 0; i < textButtons.length; i++) {
            textButtons[i].style.display = textButtons[i].style.display === "none" ? "" : "none";
        }
    }

    // The Range input styling and logic
    var range = document.getElementById("range");
    var rangeText = document.getElementById("rangeText");
    range.addEventListener("change", function () {
        rangeText.innerText = this.value;
        chrome.storage.sync.set({"amount": this.value})
    });

    // The default
    chrome.storage.sync.get("amount", function (result) {
        if (typeof result !== "undefined") {
            range.value = result["amount"];
            rangeText.innerText = result["amount"];
        } else {
            range.value = 5;
            rangeText.innerText = 5;
        }
    });

    // Enable button logic
    button.addEventListener("click", function (e) {
        chrome.storage.sync.get("active", function (result) {

            if (result["active"] === false) {
                // Enable the icon
                chrome.storage.sync.set({"active": true});

                chrome.browserAction.setIcon({
                    path: enabledIcon
                });

                chrome.browserAction.setTitle({
                    title: enabledTitle
                });

            } else {
                // Disable the icon
                chrome.storage.sync.set({"active": false});

                chrome.browserAction.setIcon({
                    path: disabledIcon
                });

                chrome.browserAction.setTitle({
                    title: disabledTitle
                });
            }

        });
    });

    // Change between simplified and traditional
    var simplified = document.getElementById("simplified");
    var traditional = document.getElementById("traditional");
    chrome.storage.sync.get("type", function (result) {
        if (typeof result !== "undefined" && result["type"] == "simplified") {
            simplified.checked = true;
        } else {
            traditional.checked = true;
        }
    });

    simplified.onclick = function () {
        chrome.storage.sync.set({"type": "simplified"});
    };

    traditional.onclick = function () {
        chrome.storage.sync.set({"type": "traditional"});
    };
};
