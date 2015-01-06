'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('NavigationCtrl', function ($scope, $location, UserInfo) {
    $scope.user = UserInfo;
        
    $scope.isOnMainPage = function(){
      return $location.path() === '/' || $location.path === '';
    };
  });
