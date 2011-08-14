var filetray = {

	ui: {},

	init: function(uielement)
	{
		filetray.ui = uielement;
	},

	listFiles: function()
	{
		$.get('php/_listfiles.php', function(r){

			$(document).model().files = r;

			// remove .. & .
			//$(document).model().files.shift();
			$(document).model().files.shift();

		});
	},
};