/* global QUnit, opaTest */

sap.ui.define([
    "de/jlabs/ui5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
], function (mockserver) {
    'use strict';
    QUnit.module("Navigation");
    opaTest("Should open the Hello dialog", function (Given, When, Then) {
        // initialize the mockserver
        mockserver.init();
        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "de.jlabs.ui5"
            }
        });
        // Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton();
        // Assertions
        Then.onTheAppPage.iShouldSeeTheHelloDialog();
        // Cleanup
        Then.iTeardownMyApp();
    });
});