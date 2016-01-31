# Inuktitut Transliterator
####Transliterates Roman othographic Inuktitut into the Unified Canadian Aboriginal Syllabics equivalents.

#### Project Website: http://transliterator.maakusii.com/

* Seeking help with UI design and bug testing

## Background
This project began in 2011 out of my personal interest to better understand Inuktitut, and out of frustration that there were few really simple ways transliterate on the fly. It started as a shell script, and evolved into a very rudamentary website for use by friends.

In January 2016 some bugs were brought to my atteniton and I decided to release the code on Github to make it available for people interested in using it offline or helping to improve it. Although this code is straightfoward and short, in the spirit of Inuit Qaujimajatuqangit, I have licensed it under GPLv3. Please share and share-alike.


## Rules to Generating Syllabics
1. There are three symbols to represent three short-form vowels:
  * a, i, and u;
  * ᐊ, ᐃ, and ᐅ.

2. These three can be made long vowels by a combining dot above:
  * aa, ii, and uu;
  * ᐋ, ᐄ, and ᐆ.

3. Fourteen consonants can stand alone as superscript characters:
  * p, t, k, m, n, r, s, l, j, g, q, v, lh, and ng;
  * ᑉ, ᑦ, ᒃ, ᒻ, ᓐ, ᕐ, ᔅ, ᓪ, ᔾ, ᒡ, ᖅ, ᕝ, ᖦ, and ᖕ.
  * Consonants in their superscript cannot immediately precede a vowel in the same word.

4. A consonant immediately preceeding a vowel in a word produces a new symbol:
  * 84 possibilites exist; 42 short vowel, and 42 long vowel;
  * see the complete table at the end of this readme file for the full list.


## Objectives
Many people know how to write in syllabics on computers by using special keyboard sets provided thought system macros or third party applications, as well as by using other online transliterators. Despite this, there is still some technical barrier to writing in syllabic Inuktitut. The goal of this tool is to eliminate that barrier as much as possible, and make writing syllabics on a computer available to anyone.


## Thanks
For the enthusiasm from a handful of unexected users. Please continue to share this tool.
Thanks to people who have contributed their knowledge of Inuktitut and identified problems with the software.


### Nota bene
In Inuktitut the "syllabics" are actually an abugida set, not than a syllabary; however, in popular convention, Nuanvut's Inuit Language Protection Act, and the Unicode block title, the word "syllabics" persists.

* * *

  *I assume no liability for the use or misuse of this software.*

  **Mark Walle, 2016**


#### Table of Syllabics
---

| Othography    | Syllabics     | Hex Unicode   |
| ------------- |:-------------:| ------------- |
|i|ᐃ|1403|
|pi|ᐱ|1431|
|ti|ᑎ|144E|
|ki|ᑭ|146D|
|gi|ᒋ|148B|
|mi|ᒥ|14A5|
|ni|ᓂ|14C2|
|li|ᓕ|14D5|
|si|ᓯ|14EF|
|ji|ᔨ|1528|
|ri|ᕆ|1546|
|vi|ᕕ|1555|
|qi|ᕿ|157F|
|ngi|ᖏ|158F|
|lhi|ᖠ|15A0|
|ii|ᐄ|1404|
|pii|ᐲ|1432|
|tii|ᑏ|144F|
|kii|ᑮ|146E|
|gii|ᒌ|148C|
|mii|ᒦ|14A6|
|nii|ᓃ|14C3|
|lii|ᓖ|14D6|
|sii|ᓰ|14F0|
|jii|ᔩ|1529|
|rii|ᕇ|1547|
|vii|ᕖ|1556|
|qii|ᖀ|1580|
|ngii|ᖐ|1590|
|lhii|ᖡ|15A1|
|u|ᐅ|1405|
|pu|ᐳ|1433|
|tu|ᑐ|1450|
|ku|ᑯ|146F|
|gu|ᒍ|148D|
|mu|ᒧ|14A7|
|nu|ᓄ|14C4|
|lu|ᓗ|14D7|
|su|ᓱ|14F1|
|ju|ᔪ|152A|
|ru|ᕈ|1548|
|vu|ᕗ|1557|
|qu|ᖁ|1581|
|ngu|ᖑ|1591|
|lhu|ᖢ|15A2|
|uu|ᐆ|1406|
|puu|ᐴ|1434|
|tuu|ᑑ|1451|
|kuu|ᑰ|1470|
|guu|ᒎ|148E|
|muu|ᒨ|14A8|
|nuu|ᓅ|14C5|
|luu|ᓘ|14D8|
|suu|ᓲ|14F2|
|juu|ᔫ|152B|
|ruu|ᕉ|1549|
|vuu|ᕘ|1558|
|quu|ᖂ|1582|
|nguu|ᖒ|1592|
|lhuu|ᖣ|15A3|
|a|ᐊ|140A|
|pa|ᐸ|1438|
|ta|ᑕ|1455|
|ka|ᑲ|1472|
|ga|ᒐ|1490|
|ma|ᒪ|14AA|
|na|ᓇ|14C7|
|la|ᓚ|14DA|
|sa|ᓴ|14F4|
|ja|ᔭ|152D|
|ra|ᕋ|154B|
|va|ᕙ|1559|
|qa|ᖃ|1583|
|nga|ᖓ|1593|
|lha|ᖤ|15A4|
|aa|ᐋ|140B|
|paa|ᐹ|1439|
|taa|ᑖ|1456|
|kaa|ᑳ|1473|
|gaa|ᒑ|1491|
|maa|ᒫ|14AB|
|naa|ᓈ|14C8|
|laa|ᓛ|14DB|
|saa|ᓵ|14F5|
|jaa|ᔮ|152E|
|raa|ᕌ|154C|
|vaa|ᕚ|155A|
|qaa|ᖄ|1584|
|ngaa|ᖔ|1594|
|lhaa|ᖥ|15A5|
|h|ᐦ|1426|
|p|ᑉ|1449|
|t|ᑦ|1466|
|k|ᒃ|1483|
|g|ᒡ|14A1|
|m|ᒻ|14BB|
|n|ᓐ|14D0|
|l|ᓪ|14EA|
|s|ᔅ|1505|
|j|ᔾ|153E|
|r|ᕐ|1550|
|v|ᕝ|155D|
|q|ᖅ|1585|
|ng|ᖕ|1595|
|lh|ᖦ|15A6|