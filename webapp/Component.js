sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
    // "sap/base/i18n/ResourceBundle"
    // "sap/ui/model/resource/ResourceModel"
], function (
    UIComponent,
    JSONModel,
    HelloDialog
    // ResourceBundle,
    // ResourceModel
) {
    "use strict";
    return UIComponent.extend("de.jlabs.ui5.Component", {

        metadata: {
            // !!! There is an issue with IAsyncContentCreation !!!
            // By removing the the line below the Dialog works fine!!!
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            // "rootView": {
            //     "viewName": "de.jlabs.ui5.view.App",
            //     "type": "XML",
            //     "id": "app"
            // }
            manifest: "json"
        },

        /**
         * @override
         */
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
            // // set i18 Model
            // var i18Model = new ResourceModel({
            //     bundleName: "de.jlabs.ui5.i18n.i18n"
            // });
            // this.setModel(i18Model, "i18n");
        },
        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog: function () {
            this._helloDialog.open();
        }
    });
});