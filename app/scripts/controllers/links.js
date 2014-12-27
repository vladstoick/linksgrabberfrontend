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
    var busy = false;
    var totalpages;
    var page = 1;
    function loadData(page){
        console.log('bla');
        $http.get('https://da3fa.ngrok.com/users/'+$auth.getPayload().userId+'?page='+page)
    		.success(function(data) {
                totalpages = data.paging.total_pages;
        		data = data.links.map(function(link){
        			link.sender.facebookImgUrl = 'http://graph.facebook.com/v2.2/' +
        			link.sender.facebook_id + '/picture?width=100&height=100';		
        			return link;
        		});
        		$scope.links= $scope.links.concat(data);
                busy = false;
      		});
    }
    $scope.loadNextPage = function(){
        
        if(busy === true || page>totalpages){
            return;
        }
        console.log('bla');
        busy = true;
        loadData(page);
        page++;
    };
  });
