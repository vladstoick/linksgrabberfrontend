'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('NavigationCtrl', function ($scope, $location, UserInfo, $state) {
    $scope.user = UserInfo;
        
    $scope.isOnMainPage = function(){
		return $state.current.name === 'home';
    };
  });
