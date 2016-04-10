var count = 0; // timer to reduce server load
function startTransliteration(){
	count = count+1;
	setTimeout("showTransliteration("+count+")",300);
}

function showTransliteration(currCount){
	
	if (currCount == count){
		count=0;
		var roman = document.getElementById('roman').value;

		if (roman.length==0)
		{ 
			document.getElementById("inuktitut").innerHTML="";
			return;
		}

		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("inuktitut").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","transliterate.php?roman="+roman,true);
		xmlhttp.send();
	}
}