'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LinksCtrl', function ($scope, Links, UserInfo, $location) {
  	if(UserInfo.isAuthenticated === false){
  		$location.path('/login');
  	}
	$scope.links = Links;
    $scope.shouldshowallmedia = false;
  });
