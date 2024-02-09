sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("ns.integration_card_component.Component", {

		metadata : {
			manifest: "json"
		},

		init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            this.getRouter().initialize();
        },

		onCardReady: function (oCard) {
			this.oCard = oCard;
		}

	});

	return Component;

});
