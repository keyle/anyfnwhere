var editor = {

	cm: {},

	init: function()
	{
		editor.cm = CodeMirror.fromTextArea('txtcode', {
			height: "100%",
			tabMode: "spaces",
			indentUnit: 4,
			parserfile: [
				"parsexml.js", "parsecss.js", "tokenizejavascript.js",
				"parsejavascript.js",
				"../contrib/php/js/tokenizephp.js",
				"../contrib/php/js/parsephp.js",
			    "../contrib/php/js/parsephphtmlmixed.js"
			],
			stylesheet: [
			"cm/css/newcolors.css",
			"cm/css/jscolors.css",
			"cm/css/csscolors.css",
			"cm/contrib/php/css/phpcolors.css"
			],
			path: "cm/js/",
			continuousScanning: 250,
			passDelay: 25,
			lineNumbers: true,
			iframeClass: 'codeframe',
		});

		$(editor.cm.win).focus();

		editor.setShortcuts();
	},

	setShortcuts: function()
	{
		$(editor.cm.win).keydown(function (e) {

			var kc = (e.keyCode ? e.keyCode : e.which);
			var isShortCut = false;

		    if(e.metaKey||e.ctrlKey)
		    {
		    	if(kc != 16) // avoid shift
		    		isShortCut=true;
		    }

			if(kc==79 && isShortCut) // o
			{
				editor.open();

				e.stopPropagation();
				e.preventDefault();
				isShrtCut=false;
				return false;
			}

		    if(kc == 83 && isShortCut) // s
		    {
				editor.save();

				e.stopPropagation();
				e.preventDefault();
				isShrtCut=false;
				return false;
			}

		});

	},

	save: function()
	{
		progress.showProgress('Saving file.html ...');

		$.post('php/_savefile.php', {
			targetfile: 'target.html',
			content: editor.cm.getCode()
			}, function(r) {

			progress.hideProgress();
		});
	},

	open: function()
	{
		alert('TBD');
	},
};
