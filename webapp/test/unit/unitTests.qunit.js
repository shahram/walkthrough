/* global QUnit */
QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require([
        "de/jlabs/ui5/test/unit/model/formatter"
    ], function () {
        QUnit.start();
    });
});