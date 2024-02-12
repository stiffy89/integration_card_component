jQuery.sap.registerModulePath("zsesp_launchpad_css", "css/");
jQuery.sap.includeStyleSheet(sap.ui.resource("zsesp_launchpad_css", "style.css"));	

sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel, Host) {
	"use strict";

	return Controller.extend("ns.integration_card_component.Detail", {
		onInit: function() {
			const orderRoute = this.getOwnerComponent().getRouter().getRoute("detail");
  			orderRoute.attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function () {
			let oSelectedData = this.getOwnerComponent()._selectedData;
			let oModel = new sap.ui.model.json.JSONModel(oSelectedData);
			let oView = this.getView();
			oView.setModel(oModel);
		},

		onNavButtonPress: function () {
			this.getOwnerComponent().getRouter().navTo('home');
		}
	});
});