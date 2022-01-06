sap.ui.define([
    "sap/m/MessageToast",
    // "sap/ui/core/Fragment",
    "sap/ui/core/mvc/Controller"
], function (
    MessageToast,
    // Fragment,
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
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog()
            // var oView = this.getView();
            // // create dialog lazily
            // if (!this._pDialog) {
            //     this._pDialog = Fragment.load({
            //         id: oView.getId(),
            //         name: "de.jlabs.ui5.view.HelloDialog",
            //         controller: this
            //     }).then(function (oDialog) {
            //         // connect dialog to the root view of this component (models, lifcycle)
            //         oView.addDependent(oDialog);
            //         return oDialog;
            //     })
            // }
        },
        // onCloseDialog: function () {
        //     this.byId("helloDialog").close();
        // }
    });
});