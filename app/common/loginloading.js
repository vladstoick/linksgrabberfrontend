'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LoginLoadingCtrl', function ($scope, UserInfo, $state) {
	$scope.isAuthenticated = UserInfo.isAuthenticated;
	if($scope.isAuthenticated == true){
		$state.go('links');
	}
	$scope.$watch('isAuthenticated', function(newValue){
		if(newValue == true){
			$state.go('links');		
		}
	});

  });
