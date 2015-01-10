'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('ConversationsCtrl', function ($scope, Conversations, UserInfo, $state) {
  	if(UserInfo.isAuthenticated === false){
  		$state.go('login');
  	}
	$scope.conversations = Conversations;
	$scope.openConversation = function(id){
		$state.go('conversationsdetail',{conversationid:id});
	}
  });
