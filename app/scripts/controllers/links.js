'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LinksCtrl', function ($scope, $http, $auth) {
    $scope.links = [];
    $scope.busy = false;
    $scope.isDone = false;
    var totalpages = -1;
    var page = 1;
    function loadData(page){
        console.log('bla');
        $http.get(apiURL + '/users/'+$auth.getPayload().userId+'?page='+page)
    		.success(function(data) {
                totalpages = data.paging.total_pages;
        		data = data.links.map(function(link){
        			link.sender.facebookImgUrl = 'http://graph.facebook.com/v2.2/' +
        			link.sender.facebook_id + '/picture?width=100&height=100';		
        			return link;
        		});
        		$scope.links= $scope.links.concat(data);
                $scope.busy = false;
      		});
    }
    $scope.loadNextPage = function(){
        
        if($scope.busy === true || $scope.isDone){
            return;
        }
        if(page>totalpages && totalpages!==-1){
            $scope.isDone = true;
            return;
        }
        console.log('bla');
        $scope.busy = true;
        loadData(page);
        page++;
    };
  });
