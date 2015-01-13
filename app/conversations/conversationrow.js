'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:linkDirective
 * @description
 * # linkDirective
 */
angular.module('linksgrabberApp')
  .directive('conversationrow', function () {
    return {
    	scope: {
    		data : '='
    	},
      templateUrl: 'conversations/conversationrow.html',
      restrict: 'E',
      link : function postLink(scope, element){
        scope.img1 = '';
        scope.img2 = '';
        scope.img3 = '';
        if(scope.data.users.length >= 1){
          scope.img1 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[0].facebook_id + '/picture?width=100&height=100'; 
          scope.user1 = scope.data.users[0].name;   
        }
        if(scope.data.users.length >= 2){
          scope.img2 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[1].facebook_id + '/picture?width=100&height=100';    
          scope.user2 = scope.data.users[1].name;
        }
        if(scope.data.users.length >= 3){
          scope.img3 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[2].facebook_id + '/picture?width=100&height=100';     
          scope.user3 = scope.data.users[2].name;
        }
        if(scope.data.users.length >= 4){
          scope.andMore = ' and ' + (scope.data.users.length - 3) + ' more';
        }
      }
      
    };
  });
