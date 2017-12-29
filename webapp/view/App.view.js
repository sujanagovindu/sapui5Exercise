sap.ui.jsview("com.testsales.view.App", {

	getControllerName: function () {
		return "com.testsales.controller.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "com.testsales.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the detail page
		var detail = sap.ui.xmlview("Detail", "com.testsales.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, true);
		
		// done
		return this.app;
	}
});