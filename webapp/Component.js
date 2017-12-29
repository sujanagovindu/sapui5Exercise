sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/testsales/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.testsales.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
					// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		this.setModel(oModel);
		
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/i18n.properties"});
		this.setModel(i18nModel, "i18n");

		}
	});
});

