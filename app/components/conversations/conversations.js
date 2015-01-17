'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('ConversationsCtrl', function ($scope, UserInfo, Conversations, $state) {
  	if(UserInfo.isAuthenticated === false){
  		$state.go('login');
  	}

	$scope.conversations = [];
	$scope.isBusy = false;
	$scope.isDone = false;
	var page = 1;
	var totalPages = -1;
	
	$scope.loadNextPage = function(){
		if($scope.isDone === true){
			return;
		}
		$scope.isBusy = true;
		Conversations.getConversationsPage(page)
			.success(function(conversations){
				totalPages = conversations.paging.total_pages;
        		conversations = conversations.threads;
        		for(var i = 0; i < conversations.length ; i++){
          			$scope.conversations.push(conversations[i]);
        		}
        		$scope.isBusy = false;
        		page++;
        		if(totalPages <= page){
        			$scope.isDone = true;
        		}
			})
			.error(function(error){
				console.log(error);
			});	
	};

	$scope.openConversation = function(id){
		$state.go('conversationsdetail',{conversationid:id});
	};
	
  });
