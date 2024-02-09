jQuery.sap.registerModulePath("zsesp_launchpad_css", "css/");
jQuery.sap.includeStyleSheet(sap.ui.resource("zsesp_launchpad_css", "style.css"));	

sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";
	
	let oController;
	let oRouter

	return Controller.extend("ns.integration_card_component.Card", {
		onInit: function () {
			oController = this;
			oRouter = this.getOwnerComponent().getRouter();

			var oModel = new JSONModel({
				"cities": [
					{
						"text": "Berlin",
						"key": "BR"
					},
					{
						"text": "London",
						"key": "LN"
					},
					{
						"text": "Madrid",
						"key": "MD"
					},
					{
						"text": "Prague",
						"key": "PR"
					},
					{
						"text": "Paris",
						"key": "PS"
					},
					{
						"text": "Sofia",
						"key": "SF"
					},
					{
						"text": "Viennas",
						"key": "VN"
					}
				]
			});
			this.getView().setModel(oModel);
		},
		nextPage: function (oEvent) {
			console.log('hello')
			oRouter.navTo("detail")
		},
		onBackPress: function () {
			console.log('back')
			oRouter.navTo("home")
		}
	});
});