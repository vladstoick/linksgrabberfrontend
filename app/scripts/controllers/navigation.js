'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('NavigationCtrl', function ($scope, $auth) {
	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};
  	$scope.logout = function(){
  		$auth.logout();
  	};
  });
