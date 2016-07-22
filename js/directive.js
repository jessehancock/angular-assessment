angular.module('assessment').directive('directive', function(){
  return{
    templateUrl: './views/product-tmpl.html',
    restrict: 'EA',
    scope: {
      product: '=',
    }
  };
});
