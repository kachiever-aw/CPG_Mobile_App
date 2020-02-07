/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cpg_mobiile_app/CPG_Mobile_App/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});