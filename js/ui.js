$(document).ready(function(){

	progress.init($('#progressui'));

	editor.init();

	//filetray.init($('#filetrayui'));
	//filetray.listFiles();

	$(document).knot(model);

});

var model = {

	files: [
		{name: 'file1', ext: 'png'},
		{name: 'file2', ext: 'jpg'},
		{name: 'file3', ext: 'cs'},
		{name: 'folder1', ext: ''},
	],
}
