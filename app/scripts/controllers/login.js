'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LoginCtrl', function ($scope, UserInfo) {
    $scope.authenticate = function(provider) {
		UserInfo.login(provider);
    };
  });
