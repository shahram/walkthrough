QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
    "use straict";
    sap.ui.require([
        "de/jlabs/ui5/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});