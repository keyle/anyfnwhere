var filetray = {

	ui: {},

	init: function(uielement)
	{
		filetray.ui = uielement;
	},

	listFiles: function()
	{
		$.get('php/_listfiles.php', function(r){

			r = r.replace('. <br/>', '');
			r = r.replace('.. <br/>', '');

			filetray.ui.html(r);

		});
	},
};