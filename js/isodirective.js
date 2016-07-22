//dont know if i need this

angular.module('assessment').directive('isodirective', function(){
  return{
    templateUrl: './views/product-details.html',
    restrict: 'EA',
    scope: {
      scopedata: '=',
    }
  };
});
