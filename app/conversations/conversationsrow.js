'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:linkDirective
 * @description
 * # linkDirective
 */
angular.module('linksgrabberApp')
  .directive('conversationsrow', function () {
    return {
    	scope: {
    		data : '=',
    	},
      templateUrl: 'conversations/conversationsrow.html',
      restrict: 'E',
      link : function postLink(scope){
        if(scope.data.users.length >= 1){
          scope.img1 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[0].facebook_id + '/picture?width=100&height=100';    
        }
        if(scope.data.users.length >= 2){
          console.log(scope.data.users[1]);
          scope.img2 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[1].facebook_id + '/picture?width=100&height=100';    
          console.log(scope.img2); 
        }
        if(scope.data.users.length >= 3){
          scope.img3 = 'https://graph.facebook.com/v2.2/' +
          scope.data.users[2].facebook_id + '/picture?width=100&height=100';     
        }
        if(scope.data.users.length >= 4){
          scope.andMore = ' and ' + (scope.data.users.length - 3) + ' more';
        }
      }
    };
  });
