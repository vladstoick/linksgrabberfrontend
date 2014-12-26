'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LoginCtrl', function ($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
      console.log($auth.getToken());
    };
  });
