<?php
/* Roman Orthographics to Inuktitut Syllabics Translitorator
** Author: Mark Walle
** COPYRIGHT 2011, PLEASE CONTACT MWALLE@GMAIL.COM.
*/

	/* get the "roman" parameter from URL */
	$roman = $_GET["roman"];
	$roman = strtolower($roman);
	
	/* use handle buffer to populate dictionary array from key-value organized csv file */
	$dict;
	$transliteration = "";
	if(!file_exists("inuktitut.csv")) {
		die("ERR: File not found");
	} else
	$handle = @fopen("inuktitut.csv", "r");
	if ($handle) {
	  		while (($data = fgetcsv($handle, 20, ",", "\"", "\\")) !== false) {
			$dict[$data[0]] = $data[1];	
		}
		if (!feof($handle)) {
			echo "ERR: \n";
		}
		fclose($handle);
	}
	
	if (strlen($roman) == 0) {
		echo ("no input \n");
	}
	
	//Transliteration takes place here
	else {
		$i=0; // current position
		while($i < strlen($roman)){
			// reducing by 1 from a maximum substring of 5 characters, look for a dictionary match;
			$j = min($i+5, strlen($roman));
			while ($j>$i && $dict[substr($roman,$i,$j-$i)] == null){
				$j--;
			}
			if($i == $j){
				echo ("ERR: String does not exist in transliteration dictionary. \n");
				break;
			}
			else{
				$transliteration = $transliteration . "&#x" . $dict[substr($roman,$i,$j-$i)] . ";";
				$i = $j;
			}
		}
		$out = htmlspecialchars($transliteration, ENT_COMPAT, 'UTF-8', FALSE);
		echo $out;
	}
?>