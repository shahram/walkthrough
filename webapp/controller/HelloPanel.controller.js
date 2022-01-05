sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
], function (
    MessageToast,
    Controller
) {
    "use strict";

    return Controller.extend("de.jlabs.ui5.controller.HelloPanel", {
        onShowHello: function () {

            // Show a native JavaScript alert
            // alert("Hello Jupiter")
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }
    });
});