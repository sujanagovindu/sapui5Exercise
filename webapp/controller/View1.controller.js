sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.testsales.controller.View1", {
onInit: function(){
						// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "com.testsales.view.App",
			type : "JS",
			viewData : { component : this }
		});

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);
		this.setModel(oModel);
		jQuery.sap.log.info("in init Component"+this);
		jQuery.sap.log.info("in init"+oView);
}
	});
});