sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/base/i18n/ResourceBundle",
    "sap/ui/model/resource/ResourceModel"
], function (
    UIComponent,
    JSONModel,
    ResourceBundle,
    ResourceModel
) {
    "use strict";
    return UIComponent.extend("de.jlabs.ui5.Component", {

        metadata: {
            "interfaces": ["IAsyncContentCreation"],
            "rootView": {
                "viewName": "de.jlabs.ui5.view.App",
                "type": "XML",
                "id": "app"
            }
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

            // set i18 Model
            var i18Model = new ResourceModel({
                bundleName: "de.jlabs.ui5.i18n.i18n"
            });
            this.setModel(i18Model, "i18n");
        }
    });
});