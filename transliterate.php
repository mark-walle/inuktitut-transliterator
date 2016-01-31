<?php
/* Roman Orthographics to Inuktitut Syllabics Translitorator
** Author: Mark Walle
** COPYRIGHT 2011, PLEASE CONTACT MWALLE@GMAIL.COM.
*/

	/* get the "roman" parameter from URL */
	$roman = $_GET["roman"];
	$roman = strtolower($roman);
	
	/* read fields from the inuktitut.csv file into the $dict dictionary array */
	$dict;
	$transliteration = "";
	$handle = @fopen("inuktitut.csv", "r");
	if ($handle) {
	  		while (($data = fgetcsv($handle, 1000, ",", "\"", "\\")) !== false) {
			$dict[$data[0]] = $data[1];	
		}
		if (!feof($handle)) {
			echo "Error: unexpected fgets() fail\n";
		}
		fclose($handle);
	}
	
	if (strlen($roman) == 0) {
		echo ("no input \n");
	}
	
	//Transliteration takes place here
	else {
		$i=0;
		while($i < strlen($roman)){
			$j = min($i+4, strlen($roman));
			while ($j>$i && $dict[substr($roman,$i,$j-$i)] == null){
				$j--;
			}
			if($i == $j){
				echo ("Error: Does not fit alphabet. \n");
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