angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl:  "templates/cardDirective.html",
    scope: {
        question: '@',
        delete: '&'
    }
  };
  return directive;
}