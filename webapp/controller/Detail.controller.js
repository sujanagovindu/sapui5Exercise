sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	
	return Controller.extend("com.testsales.controller.Detail", {
		handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	}	
	});
});

 