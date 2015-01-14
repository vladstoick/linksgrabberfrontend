'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('ConversationDetailCtrl', function ($scope, Conversations, UserInfo, $state, $stateParams) {
	if(UserInfo.isAuthenticated === false){
  		$state.go('login');
  	}

  	var thread = $stateParams.conversationid;

    $scope.shouldshowallmedia = false;
    $scope.links = [];
	$scope.isBusy = false;
	$scope.isDone = false;
	var page = 1;
	var totalPages = -1;
	
	$scope.loadNextPage = function(){
		if($scope.isDone === true){
			return;
		}
		$scope.isBusy = true;
		Conversations.getConversationPageForThread(page,thread)
			.success(function(links){
				console.log(links);
				totalPages = links.paging.total_pages;
        		links = links.messages;
        		links.map(function(link){
        			link.sender.facebookImgUrl = 'https://graph.facebook.com/v2.2/' +
			        link.sender.facebook_id + '/picture?width=100&height=100';    
			        return link;
        		});
        		for(var i = 0; i < links.length ; i++){
          			$scope.links.push(links[i]);
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

  });
