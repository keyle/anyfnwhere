$(document).ready(function(){

	progress.init($('#progressui'));

	editor.init();

	filetray.init($('#filetrayui'));
	filetray.listFiles();
});

var ui = {

	model: {
		files: [],
	},
}