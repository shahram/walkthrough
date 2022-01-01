sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (
    Controller,
    MessageToast,
    JSONModel,
) {
    "use strict";

    return Controller.extend("de.jlabs.ui5.controller.App", {
        /**
         * @override
         */
        onInit: function () {
            // Controller.prototype.onInit.apply(this, arguments);
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHello: function () {
            // Show a native JavaScript alert
            // alert("Hello Jupiter")
            MessageToast.show("Hello Jupiter or Mars!");
        }
    });
});