sap.ui.define([
    "sap/m/Button", "sap/m/MessageToast"
], function (
    Button,
    MessageToast
) {
    "use strict";
    new Button({
        text: "Drück mich!",
        press: function () {
            MessageToast.show("Hello Jupiter!");
        }
    }).placeAt("content");
});