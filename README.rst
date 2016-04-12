Inuktitut Transliterator
========================

Transliterates Roman othographic Inuktitut into the Unified Canadian Aboriginal Syllabics equivalents.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Project Website: http://transliterator.maakusii.com/
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Update Log
----------
April 10:
- Removed Hex from syllabics tables
- Changed license to CC BY-SA 4.0

April 9:
- Project has been rewritten using AngularJS, so now processing is all client-side.
- input supports all sorts of characters that the previous version didn't, including carriage returns and spaces, so you can basically just paste paragraphs of Roman Orthograpic text into it!
- Support for alternative options for ł as lh, &l, and ll (western dialects).
- Support for the nng syllabics (which had somehow been missed in the previous version).
- Support for the H character, which carries over from the Roman character set.
- Now using Bootstrap, so it looks much nicer.
- The website now collects user data via Google Analytics.

Background
----------

This project began out of my personal interest to better
understand Inuktitut, and out of frustration that there were few really
simple ways transliterate on the fly. It started as a shell script, and
evolved into a very rudamentary website for use by friends.

In January 2016 some bugs were brought to my atteniton and I decided to
release the code on Github to make it available for people interested in
using it offline or helping to improve it. In the spirit of Inuit
Qaujimajatuqangit (or my best understanding of the spirit), this project
is open source (using the MIT License right now).

Rules to Generating Syllabics
-----------------------------

1. There are three symbols to represent three short-form vowels:

-  a, i, and u;
-  ᐊ, ᐃ, and ᐅ.

2. These three can be made long vowels by a combining dot above:

-  aa, ii, and uu;
-  ᐋ, ᐄ, and ᐆ.

3. Fourteen consonants can stand alone as superscript characters:

-  H, p, t, k, m, n, r, s, l, j, g, q, v, ł(/lh/&l/ll), and ng;
-  H, ᑉ, ᑦ, ᒃ, ᒻ, ᓐ, ᕐ, ᔅ, ᓪ, ᔾ, ᒡ, ᖅ, ᕝ, ᖦ, and ᖕ.
-  Superscript consonants follow vowels, or otherwise they combine
    with the vowel to produce a new syllabic (see 4).

4. A consonant immediately preceeding a vowel in a word produces a new
   symbol:

-  84 possibilites exist; 42 short vowel, and 42 long vowel;
-  The complete table of syllabics appears below.

Objectives
----------

Many people know how to write in syllabics on computers by using special
keyboard sets provided thought system macros or third party
applications, as well as by using other online transliterators. Despite
this, there is still some technical barrier to writing in syllabic
Inuktitut. The goal of this tool is to eliminate that barrier as much as
possible, and make writing syllabics on a computer available to anyone.

Thanks
------

For the enthusiasm from a handful of unexected users. Please continue to
share this tool. Thanks to people who have contributed their knowledge
of Inuktitut and identified problems with the software.

Nota bene
~~~~~~~~~

In Inuktitut the “syllabics” are actually an abugida set, not than a
syllabary; however, in popular convention, Nuanvut’s Inuit Language
Protection Act, and the Unicode block title, the word “syllabics”
persists.

--------------

Table of Syllabics
-----------------------

+--------------+-------------+--------------+-------------+--------------+-------------+
|                  i-vowels  |                   u-vowels |                 a-vowels   |
+--------------+-------------+--------------+-------------+--------------+-------------+
| Othography   | Syllabics   | Othography   | Syllabics   | Othography   | Syllabics   |
+==============+=============+==============+=============+==============+=============+
| i            | ᐃ           | u            | ᐅ           | a            | ᐊ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| pi           | ᐱ           | pu           | ᐳ           | pa           | ᐸ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ti           | ᑎ           | tu           | ᑐ           | ta           | ᑕ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ki           | ᑭ           | ku           | ᑯ           | ka           | ᑲ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| gi           | ᒋ           | gu           | ᒍ           | ga           | ᒐ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| mi           | ᒥ           | mu           | ᒧ           | ma           | ᒪ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ni           | ᓂ           | nu           | ᓄ           | na           | ᓇ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| li           | ᓕ           | lu           | ᓗ           | la           | ᓚ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| si           | ᓯ           | su           | ᓱ           | sa           | ᓴ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ji           | ᔨ           | ju           | ᔪ           | ja           | ᔭ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ri           | ᕆ           | ru           | ᕈ           | ra           | ᕋ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| vi           | ᕕ           | vu           | ᕗ           | va           | ᕙ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| qi           | ᕿ           | qu           | ᖁ           | qa           | ᖃ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ngi          | ᖏ           | ngu          | ᖑ           | nga          | ᖓ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| nngi         | ᙱ           | nngu         | ᙳ           | nnga         | ᙵ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| lh/ll/&l/łi  | ᖠ           | lh/ll/&l/łu  | ᖢ           | lh/ll/&l/ła  | ᖤ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ii           | ᐄ           | uu           | ᐆ           | aa           | ᐋ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| pii          | ᐲ           | puu          | ᐴ           | paa          | ᐹ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| tii          | ᑏ           | tuu          | ᑑ           | taa          | ᑖ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| kii          | ᑮ           | kuu          | ᑰ           | kaa          | ᑳ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| gii          | ᒌ           | guu          | ᒎ           | gaa          | ᒑ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| mii          | ᒦ           | muu          | ᒨ           | maa          | ᒫ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| nii          | ᓃ           | nuu          | ᓅ           | naa          | ᓈ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| lii          | ᓖ           | luu          | ᓘ           | laa          | ᓛ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| sii          | ᓰ           | suu          | ᓲ           | saa          | ᓵ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| jii          | ᔩ           | juu          | ᔫ           | jaa          | ᔮ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| rii          | ᕇ           | ruu          | ᕉ           | raa          | ᕌ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| vii          | ᕖ           | vuu          | ᕘ           |vaa           | ᕚ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| qii          | ᖀ           | quu          | ᖂ           |qaa           | ᖄ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| ngii         | ᖐ           | nguu         | ᖒ           | ngaa         | ᖔ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| nngii        | ᙲ           | nnguu        | ᙴ           | nngaa        | ᙶ           |
+--------------+-------------+--------------+-------------+--------------+-------------+
| lh/ll/&l/łii | ᖡ           | lh/ll/&l/łuu | ᖣ           | lh/ll/&l/łaa | ᖥ           |
+--------------+-------------+--------------+-------------+--------------+-------------+

Note in the above table that the ł character may be written as lh, ll, or &l, to support conventional keyboards methods and a variety of observed spelling preferences.

+--------------+-------------+
| Consonants                 |
+--------------+-------------+
| Othography   | Syllabics   |
+==============+=============+
| t            | ᑦ           |
+--------------+-------------+
| k            | ᒃ           |
+--------------+-------------+
| g            | ᒡ           |
+--------------+-------------+
| m            | ᒻ           |
+--------------+-------------+
| n            | ᓐ           |
+--------------+-------------+
| l            | ᓪ           |
+--------------+-------------+
| s            | ᔅ           |
+--------------+-------------+
| j            | ᔾ           |
+--------------+-------------+
| r            | ᕐ           |
+--------------+-------------+
| v            | ᕝ           |
+--------------+-------------+
| q            | ᖅ           |
+--------------+-------------+
| ng           | ᖕ           |
+--------------+-------------+
| lh           | ᖦ           |
+--------------+-------------+

+--------------+-------------+
| Digraphic "qq" Exceptions  | 
+--------------+-------------+
| Othography   | Syllabics   |
+==============+=============+
| qqi          | ᖅᑭ          |
+--------------+-------------+
| qqu          | ᖅᑯ          |
+--------------+-------------+
| qqa          | ᖅᑲ          |
+--------------+-------------+
| qqii         | ᖅᑮ          |
+--------------+-------------+
| qquu         | ᖅᑰ          |
+--------------+-------------+
| qqaa         | ᖅᑳ          |
+--------------+-------------+



**Mark Walle, 2016.**

**License**

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
http://creativecommons.org/licenses/by-sa/4.0/