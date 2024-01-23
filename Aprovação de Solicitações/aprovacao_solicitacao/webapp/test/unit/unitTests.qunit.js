/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"rodrigo/desafio5p/aprovacaosolicitacao/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});