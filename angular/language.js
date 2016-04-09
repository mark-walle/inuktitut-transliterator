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
            var pattern = /[^aiuptkmnrsljgqvhAIUPTKMNRSLJGQVH \n!\\"#$%&'()*+,\-.\/:;<=>?@\[\]^_`{|}~]*/g;
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
    var flag = 0;
    var j = 0;
    var dict = {
    i:"ᐃ",pi:"ᐱ",ti:"ᑎ",ki:"ᑭ",gi:"ᒋ",mi:"ᒥ",ni:"ᓂ",li:"ᓕ",si:"ᓯ ",ji:"ᔨ ",ri:"ᕆ",vi:"ᕕ",qi:"ᕿ",ngi:"ᖏ",lhi:"ᖠ",ii:"ᐄ",pii:"ᐲ",tii:"ᑏ",kii:"ᑮ",gii:"ᒌ",mii:"ᒦ",nii:"ᓃ",lii:"ᓖ",sii:"ᓰ ",jii:"ᔩ ",rii:"ᕇ",vii:"ᕖ",qii:"ᖀ",ngii:"ᖐ",lhii:"ᖡ",u:"ᐅ",pu:"ᐳ",tu:"ᑐ",ku:"ᑯ",gu:"ᒍ",mu:"ᒧ",nu:"ᓄ",lu:"ᓗ",su:"ᓱ",ju:"ᔪ",ru:"ᕈ",vu:"ᕗ",qu:"ᖁ",ngu:"ᖑ",lhu:"ᖢ",uu:"ᐆ",puu:"ᐴ",tuu:"ᑑ",kuu:"ᑰ",guu:"ᒎ",muu:"ᒨ",nuu:"ᓅ",luu:"ᓘ",suu:"ᓲ",juu:"ᔫ",ruu:"ᕉ",vuu:"ᕘ",quu:"ᖂ",nguu:"ᖒ",lhuu:"ᖣ",a:"ᐊ",pa:"ᐸ",ta:"ᑕ",ka:"ᑲ",ga:"ᒐ",ma:"ᒪ",na:"ᓇ",la:"ᓚ",sa:"ᓴ",ja:"ᔭ",ra:"ᕋ",va:"ᕙ",qa:"ᖃ",nga:"ᖓ",lha:"ᖤ",aa:"ᐋ",paa:"ᐹ",taa:"ᑖ",kaa:"ᑳ",gaa:"ᒑ",maa:"ᒫ",naa:"ᓈ",laa:"ᓛ",saa:"ᓵ",jaa:"ᔮ",raa:"ᕌ",vaa:"ᕚ",qaa:"ᖄ",ngaa:"ᖔ",lhaa:"ᖥ",t:"ᑦ",k:"ᒃ",g:"ᒡ",m:"ᒻ",n:"ᓐ",l:"ᓪ",s:"ᔅ",j:"ᔾ",r:"ᕐ",v:"ᕝ",q:"ᖅ",ng:"ᖕ",lh:"ᖦ"
    };
    for (var i = 0; i < orthographics.length; i++) {
      j = Math.min(i+5,orthographics.length);
      console.log("returning " + j);
      while (j>i && !(orthographics.substr(i,j-i) in dict)){
                j--;
            }
            if(i == j){
              console.log("not in dict");
              //do stuff to handle punctuation
              console.log(syllabics);
              console.log(orthographics);
              console.log(orthographics.substr(i,i+1));
              syllabics = syllabics + orthographics.substr(i,i+1);
              console.log(syllabics);
            }
            else{
                syllabics = syllabics + dict[orthographics.substr(i,j-i)];
                i = j-1;
            }
    }
    return syllabics;
  };
});