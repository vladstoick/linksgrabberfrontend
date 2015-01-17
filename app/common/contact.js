'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('ContactCtrl', function ($scope, $http, apiURL) {
  	$scope.submitForm = function(isValid) {
  		var email = $scope.email;
  		var message = $scope.message;
        if (isValid) {
        	$scope.isLoading = true;
        	$http({
          		method : 'POST',
          		url : apiURL + '/support',
          		params : {
            		email : email, 
            		message : message
            	}
          	}).success(function(){
          		// $state.go('home');
          		$scope.isLoading = false;
          		$scope.isSuccesful = true;
          	}).error(function(){
          		$scope.isLoading = false;
          		$scope.hasError = true;
          	});
        }
    };
  });
