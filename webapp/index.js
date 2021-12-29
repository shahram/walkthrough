sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (
    XMLView
) {
    "use strict";
    XMLView.create({
        viewName: "de.jlabs.ui5.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});