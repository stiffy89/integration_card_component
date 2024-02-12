jQuery.sap.registerModulePath("zsesp_launchpad_css", "css/");
jQuery.sap.includeStyleSheet(sap.ui.resource("zsesp_launchpad_css", "style.css"));	

sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/integration/Host"
], function (MessageToast, Controller, JSONModel, Host) {
	"use strict";
	
	let oController;
	let oRouter;
	let oCard;

	return Controller.extend("ns.integration_card_component.Card", {
		onInit: function () {
			oController = this;
			oRouter = this.getOwnerComponent().getRouter();
			oCard = this.getOwnerComponent().oCard;
			
			/*  var oHost = new Host({
				resolveDestination: function(sDestinationName, oCard) {
					switch(sDestinationName){
						case "ES5" : 
							console.log('resolve es5')
							return "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
						break;
					}
				}
			});

			oCard.setHost(oHost); */
			//show skeleton screen on the card
			oCard.showLoadingPlaceholders();

			/* oCard.request({
				url: "{{destinations.ES5}}/ContactSet",
				//url: "https://services.odata.org/v3/northwind/northwind.svc/Customers",
				parameters: {
					"$format": "json",
					"$top": 10
				},
				method: "GET",
			}).then(function(oRes){
				console.log(oRes);
			}).catch(function(error){
				console.log(error);
			}) */


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