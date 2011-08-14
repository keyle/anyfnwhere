var progress = {

	ui: {},

	init: function(uielement)
	{
		progress.ui = uielement;
		$(progress.ui).hide();
	},

	showProgress: function(stringMessage)
	{
		$(progress.ui).html(stringMessage);
		$(progress.ui).show();
	},

	hideProgress: function()
	{
		$(progress.ui).hide();
	},

};