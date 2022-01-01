sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("de.jlabs.ui5.controller.App", {
        onShowHello: function () {
            // Show a native JavaScript alert
            alert("Hello Jupiter")
        }
    });
});