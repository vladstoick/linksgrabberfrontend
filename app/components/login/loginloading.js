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
	$scope.$on('login', function(event){
		console.log(event);
		if(newValue === true){
			$state.go('links');		
		}
	});
	if($scope.isAuthenticated === true){
		$state.go('links');
	}
  });
