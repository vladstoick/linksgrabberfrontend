'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LoginCtrl', function ($scope, $auth, $rootScope) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(){
      	$rootScope.$emit('authenticateStateChanged',true);
      });
    };
  });
