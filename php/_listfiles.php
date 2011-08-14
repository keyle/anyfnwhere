<?php

header('Content-type: application/json');

$dir = "../";

$arr = array();

if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {

            $obj['name'] = $file;

            $obj['type'] = filetype($dir . $file);

            // try get the file extension
            if($obj['type'] != 'dir')
            {
            	$obj['ext'] = end(explode('.', $file));
            }
			else
			{
				$obj['ext'] = '';
				$obj['name'] = $obj['name'] . '/';
			}

			// no extension, just clear it
			if($obj['ext'] == $obj['name'])
				$obj['ext'] = '';

            array_push($arr, $obj);
        }
        closedir($dh);
    }
}

echo json_encode($arr);
