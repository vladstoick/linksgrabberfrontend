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
      link : function postLink(scope){
        scope.users = [];
        scope.img2 = '';
        scope.img3 = '';
        for( var i = 0 ; i < Math.min(3,scope.data.users.length) ; i++ ){
          scope.users.push(scope.data.users[i]);
        }
        if(scope.data.users.length >= 4){
          scope.andMore = ' and ' + (scope.data.users.length - 3) + ' more';
        }
      }
      
    };
  });
