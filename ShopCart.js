angular.module('ShoppingCart', [])
.controller('ShoppingCartController', function($scope){


	$scope.q1=0;
	$scope.q2=0;
	$scope.q3=0;

$scope.calc=function(){

	return $scope.q1 *750 + $scope.q2 *150 +$scope.q3 *60;	
}


});