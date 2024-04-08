sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/integration/Host",
	"sap/ui/integration/Extension"
], function (MessageToast, Controller, JSONModel, Host, Extension) {
	"use strict";
	
	let oController;
	let oRouter;
	let oCard;
	let oComponent;



	return Controller.extend("ns.integration_card_component.Home", {
		onInit: function () {
		
			oController = this;
			oComponent = this.getOwnerComponent();
			oRouter = this.getOwnerComponent().getRouter();
			oCard = this.getOwnerComponent().oCard;

			console.log(oCard);
			console.log(oCard.getMetadata());
		
			
			let aResults = [
				{
					"__metadata": {
						"id": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f5599f7d')",
						"uri": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f5599f7d')",
						"type": "GWSAMPLE_BASIC.Contact"
					},
					"Address": {
						"__metadata": {
							"type": "GWSAMPLE_BASIC.CT_Address"
						},
						"City": "Walldorf",
						"PostalCode": "69190",
						"Street": "Robert-Koch-Straße",
						"Building": "1",
						"Country": "DE",
						"AddressType": "02"
					},
					"ContactGuid": "42010a00-03d8-1ede-b2a8-43a4f5599f7d",
					"BusinessPartnerID": "0100000000",
					"Title": "",
					"FirstName": "Karl",
					"MiddleName": "",
					"LastName": "Müller",
					"Nickname": "",
					"Initials": "",
					"Sex": "M",
					"PhoneNumber": "0622734567",
					"FaxNumber": "0622734004",
					"EmailAddress": "customer-do.not.reply@sap.com",
					"Language": "EN",
					"DateOfBirth": null,
					"ToBusinessPartner": {
						"__deferred": {
							"uri": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f5599f7d')/ToBusinessPartner"
						}
					}
				},
				{
					"__metadata": {
						"id": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f559bf7d')",
						"uri": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f559bf7d')",
						"type": "GWSAMPLE_BASIC.Contact"
					},
					"Address": {
						"__metadata": {
							"type": "GWSAMPLE_BASIC.CT_Address"
						},
						"City": "St.-Leon Rot",
						"PostalCode": "68789",
						"Street": "Opelstraße",
						"Building": "6",
						"Country": "DE",
						"AddressType": "02"
					},
					"ContactGuid": "42010a00-03d8-1ede-b2a8-43a4f559bf7d",
					"BusinessPartnerID": "0100000000",
					"Title": "",
					"FirstName": "Harald",
					"MiddleName": "Jens",
					"LastName": "Gahn",
					"Nickname": "",
					"Initials": "",
					"Sex": "M",
					"PhoneNumber": "0622746358",
					"FaxNumber": "0622734004",
					"EmailAddress": "hjg@sap.com",
					"Language": "EN",
					"DateOfBirth": null,
					"ToBusinessPartner": {
						"__deferred": {
							"uri": "https://SAPES5.SAPDEVCENTER.COM:443/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet(guid'42010a00-03d8-1ede-b2a8-43a4f559bf7d')/ToBusinessPartner"
						}
					}
				}
			];

		
			let oModel = new sap.ui.model.json.JSONModel(aResults);
			let oView = oController.getView();
			oView.setModel(oModel); 

			oCard.request({
				"url": "{{destinations.sapes5}}/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet",
				"parameters": {
					"$format": "json",
					"$top": 10
				},
				"withCredentials" : true
			}).then(function(oRes){

				 console.log(oRes);

				/*let aResults = oRes.d.results;
				let oModel = new sap.ui.model.json.JSONModel(aResults);
				let oView = oController.getView();
				oView.setModel(oModel); 

				oCard.hideLoadingPlaceholders(); */

			}).catch(function(error){
				/* oCard.showBlockingMessage({
					type: CardBlockingMessageType.Error,
					title: "Unable to load data"
				});
				oCard.hideLoadingPlaceholders(); */
			}) 
			

		},
		toSupplierDetail: function (oEvent) {
			let oSelectedData = oEvent.getSource().getBindingContext().getObject();
			oController.getOwnerComponent()._selectedData = oSelectedData;
			oRouter.navTo('detail');
		}
	});
});