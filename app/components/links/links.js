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

  	$scope.shouldshowallmedia = false;
  	$scope.typeOfLinks = 'received';
  	$scope.links = [];
	$scope.isBusy = false;
	$scope.isDone = false;
	var page = 1;
	var totalPages;

	$scope.changeTypeOfLinks = function(type){
		$scope.typeOfLinks = type;	
		$scope.links = [];
		$scope.isBusy = false;
		$scope.isDone = false;		
		page = 1;
		$scope.loadNextPage();
	}  
    	
	$scope.loadNextPage = function(){
		if($scope.isDone === true){
			return;
		}
		$scope.isBusy = true;
		var request =  Links.getReceivedLinksPage(page);
		if($scope.typeOfLinks == 'sent'){
			request = Links.getSentLinksPage(page);
		}
		request.success(function(links){
			totalPages = links.paging.total_pages;
    		for(var i = 0; i < links.links.length ; i++){
      			$scope.links.push(links.links[i]);
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
