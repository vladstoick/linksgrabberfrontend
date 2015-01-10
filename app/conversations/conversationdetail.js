'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('ConversationDetailCtrl', function ($scope, Conversations, UserInfo, $location) {
  	if(UserInfo.isAuthenticated === false){
  		$location.path('/login');
  	}
	$scope.conversations = Conversations;
  });
