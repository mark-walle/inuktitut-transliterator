transliterator = angular.module('language', []);

transliterator.controller('LanguageController', function($scope) {
  $scope.roman = "Inuktitut!";
});

transliterator.directive('whitelist', [function () {
  console.log("whitelist");
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            var pattern = /[^0123456789aiuptkmnrsljgqvhAIUPTKMNRSLJGQVHł \n!\\"#$%&'()*+,\-.\/:;<=>?@\[\]^_`{|}~]*/g;
            function fromUser(text) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);

transliterator.filter('transliterate', function() {

  return function(textarea) {
    
    var orthographics = textarea.toLowerCase() || '';
    var syllabics = "";
    var j = 0;
    var dict = {
    i:"ᐃ",pi:"ᐱ",ti:"ᑎ",ki:"ᑭ",gi:"ᒋ",mi:"ᒥ",ni:"ᓂ",li:"ᓕ",si:"ᓯ ",ji:"ᔨ ",ri:"ᕆ",vi:"ᕕ",qi:"ᕿ",ngi:"ᖏ",nngi:"ᙱ",lhi:"ᖠ",łi:"ᖠ",'&i':"ᖠ",lli:"ᖠ",ii:"ᐄ",pii:"ᐲ",tii:"ᑏ",kii:"ᑮ",gii:"ᒌ",mii:"ᒦ",nii:"ᓃ",lii:"ᓖ",sii:"ᓰ ",jii:"ᔩ ",rii:"ᕇ",vii:"ᕖ",qii:"ᖀ",ngii:"ᖐ",nngii:"ᙲ",lhii:"ᖡ",łii:"ᖡ",'&ii':"ᖡ",llii:"ᖡ",
    u:"ᐅ",pu:"ᐳ",tu:"ᑐ",ku:"ᑯ",gu:"ᒍ",mu:"ᒧ",nu:"ᓄ",lu:"ᓗ",su:"ᓱ",ju:"ᔪ",ru:"ᕈ",vu:"ᕗ",qu:"ᖁ",ngu:"ᖑ",nngu:"ᙳ",lhu:"ᖢ",łu:"ᖢ",'&u':"ᖢ",llu:"ᖢ",uu:"ᐆ",puu:"ᐴ",tuu:"ᑑ",kuu:"ᑰ",guu:"ᒎ",muu:"ᒨ",nuu:"ᓅ",luu:"ᓘ",suu:"ᓲ",juu:"ᔫ",ruu:"ᕉ",vuu:"ᕘ",quu:"ᖂ",nguu:"ᖒ",nnguu:"ᙴ",lhuu:"ᖣ",łuu:"ᖣ",'&uu':"ᖣ",lluu:"ᖣ",
    a:"ᐊ",pa:"ᐸ",ta:"ᑕ",ka:"ᑲ",ga:"ᒐ",ma:"ᒪ",na:"ᓇ",la:"ᓚ",sa:"ᓴ",ja:"ᔭ",ra:"ᕋ",va:"ᕙ",qa:"ᖃ",nga:"ᖓ",nnga:"ᙵ",lha:"ᖤ",ła:"ᖤ",'&a':"ᖤ",lla:"ᖤ",aa:"ᐋ",paa:"ᐹ",taa:"ᑖ",kaa:"ᑳ",gaa:"ᒑ",maa:"ᒫ",naa:"ᓈ",laa:"ᓛ",saa:"ᓵ",jaa:"ᔮ",raa:"ᕌ",vaa:"ᕚ",qaa:"ᖄ",ngaa:"ᖔ",nngaa:"ᙶ",lhaa:"ᖥ",łaa:"ᖥ",'&aa':"ᖥ",llaa:"ᖥ",
    t:"ᑦ",k:"ᒃ",g:"ᒡ",m:"ᒻ",n:"ᓐ",l:"ᓪ",s:"ᔅ",j:"ᔾ",r:"ᕐ",v:"ᕝ",q:"ᖅ",ng:"ᖕ",nng:"ᖖ",lh:"ᖦ",ł:"ᖦ",ll:"ᖦ",
    qqi:"ᖅᑭ",qqu:"ᖅᑯ",qqa:"ᖅᑲ",qqii:"ᖅᑮ",qquu:"ᖅᑰ",qqaa:"ᖅᑳ",
    h:"H"
    };
    for (var i = 0; i < orthographics.length; i++) {
      j = Math.min(i+5,orthographics.length);
      while (j>i && !(orthographics.substr(i,j-i) in dict)){
                j--;
            }
            if(i == j){
              syllabics = syllabics + orthographics.substr(i,1);
            }
            else{
                syllabics = syllabics + dict[orthographics.substr(i,j-i)];
                i = j-1;
            }
    }
    return syllabics;
  };
});