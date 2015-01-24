'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LoginCtrl', function ($scope, UserInfo, $state, $auth) {
  	if(UserInfo.isAuthenticated === true){
  		$state.go('links');
  	}
  	$scope.isLoading = false;
    $scope.authenticate = function(provider) {
    	$scope.isLoading = true;
		UserInfo.login(provider).then(function success(){
			UserInfo.isAuthenticated = true;
			$scope.isLoading = false;
			UserInfo.loadData();
			$state.go('links');
		}, function error(){
			$scope.isLoading = false;
		});
    };
  });
