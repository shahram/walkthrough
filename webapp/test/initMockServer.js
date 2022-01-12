sap.ui.define([
    "../localService/mockserver"
], function (mockserver) {
    "use strict";
    // initialize the mockserver
    mockserver.init();
    // initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});