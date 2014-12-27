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
    function loadData(page){
      $http.get('https://da3fa.ngrok.com/users/'+$auth.getPayload().userId+'page='+page)
    		.success(function(data) {
        		data = data.links.map(function(link){
        			link.sender.facebookImgUrl = 'http://graph.facebook.com/v2.2/' +
        			link.sender.facebook_id + '/picture?width=100&height=100';		
        			return link;
        		});
        		$scope.links.push(data);
      		});
    }
    function loadNextPage(){
      
    }
  });
