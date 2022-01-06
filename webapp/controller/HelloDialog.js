sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (
    ManagedObject,
    Fragment
) {
    "use strict";

    return ManagedObject.extend("de.jlabs.ui5.controller.HelloDialog", {
        /**
         * @override
         * @param {any} [sId] 
         * @param {any} [mSettings] 
         * @param {any} [oScope] 
         * @returns {sap.ui.base.ManagedObject}
         */
        constructor: function (oView) {
            // var vReturn = ManagedObject.prototype.constructor.apply(this, arguments);
            this._oView = oView;
            // return vReturn;
        },
        exit: function () {
            delete this._oView;
        },
        open: function () {
            var oView = this._oView;
            // create dialog lazily
            if (!this._pDialog) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                };
                // load asynchronous XML fragment
                this._pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "de.jlabs.ui5.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this._pDialog.then(function (oDialog) {
                oDialog.open();
            });
        }
    });
});