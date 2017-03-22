/*Directive to restrict inout boxes from only having alphabets*/
var alphabetOnly = angular.module('alphabetOnly', []);
alphabetOnly.directive('alphabetsOnly', function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^A-Za-z ]/g, '');
        console.log(transformedInput);
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});