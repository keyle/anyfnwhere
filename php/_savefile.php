<?php

if(!isset($_POST['targetfile']))
	die('whoops, no file');

if(!isset($_POST['content']))
	die('whoops, no content');

$stringData = $_POST['content'];
$stringData = stripslashes($stringData);

$myFile = "../target.html";
$fh = fopen($myFile, 'w') or die("whoops, can't open file");

fwrite($fh, $stringData);
fclose($fh);

echo 7;