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
		Links.getReceivedLinksPage(page)
			.success(function(links){
				totalPages = links.paging.total_pages;
        		links = links.links;
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
