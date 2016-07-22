
angular.module("assessment")
.controller("mainCtrl", function($scope, mainService, $stateParams){


$scope.getData = function(){

  mainService.getProducts().then(function(response){
    $scope.products = response;
    // return response;
  });
};

  $scope.products = $scope.getData();



  var id = $stateParams.id;

  $scope.getDetails = function(){
    var products = $scope.products;
    console.log(products)
    for(var i =0; i < products.length; i++){
      if(id === products[i].id)return products[i];
    }
  };



  });
