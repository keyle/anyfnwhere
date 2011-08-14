<?php
$dir = "../";

if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            echo "$file <br/>";//: filetype: " . filetype($dir . $file) . "\n";
        }
        closedir($dh);
    }
}
