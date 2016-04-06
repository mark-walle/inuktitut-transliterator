function filterRoman(e)
{
var keynum
var keychar
var romancheck

if(window.event) // IE
{
keynum = e.keyCode
}
else if(e.which) // Netscape/Firefox/Opera
{
keynum = e.which
}
keychar = String.fromCharCode(keynum)

// This part makes "h" impossible to type without preceding it with an "l",
// thereby avoiding an impossible character input to be transliterated
hChar = /[h]/
if (hChar.test(keychar)){
	var roman = document.getElementById('roman').value
	if (roman.charAt(roman.length-1) != 'l'){
		return !hChar.test(keychar)
	}
}

romancheck = /[^aiuptkmnrsljgqvhAIUPTKMNRSLJGQVH\b]/
return !romancheck.test(keychar)	
}