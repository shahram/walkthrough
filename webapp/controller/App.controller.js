sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (
    Controller,
    MessageToast
) {
    "use strict";

    return Controller.extend("de.jlabs.ui5.controller.App", {
        onShowHello: function () {
            // Show a native JavaScript alert
            // alert("Hello Jupiter")
            MessageToast.show("Hello Jupiter or Mars!");
        }
    });
});