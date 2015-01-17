'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('HomePageCtrl', function ($scope, UserInfo, $state) {
  	$scope.date = new Date();
  	if(UserInfo.isAuthenticated === true && UserInfo.firstLoad){
  		UserInfo.firstLoad = false;
  		// $state.go('links');

  	}
  });
