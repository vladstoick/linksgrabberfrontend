'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('LinksCtrl', function ($scope, $http) {
  	$http.get('http://linksgrabber.herokuapp.com/users/1')
		.success(function(data) {
			console.log(data);
    		data = data.links.map(function(link){
    			link.sender.facebookImgUrl = 'http://graph.facebook.com/v2.2/' +
    			link.sender.facebook_id + '/picture?width=100&height=100';		
    			return link;
    		});
    		console.log(data);
    		$scope.links = data;
  		});
  });
