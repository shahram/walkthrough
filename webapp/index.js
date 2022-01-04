sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
], function (
    ComponentContainer
    // XMLView
) {
    "use strict";
    new ComponentContainer({
        name: "de.jlabs.ui5",
        settings: {
            id: "ui5"
        },
        async: true
    }).placeAt("content")
    // XMLView.create({
    //     viewName: "de.jlabs.ui5.view.App"
    // }).then(function (oView) {
    //     oView.placeAt("content");
    // });
});