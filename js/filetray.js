
var filetray = {

	listFiles: function()
	{
		$.get('php/_listfiles.php', function(r){

			r = r.replace('. <br/>', '');
			r = r.replace('.. <br/>', '');

			$('.filetray').html(r);

		});
	},
};