'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:linkDirective
 * @description
 * # linkDirective
 */
angular.module('linksgrabberApp')
  .directive('linkrowtitle', function () {
    return {
    	scope: {
    		data : '=',

    	},
      	templateUrl: 'components/links/linkrowtitle.html',
      	restrict: 'E',
      	link: function(scope){
      		if(scope.data.sender){
      			scope.type = 'received';
      		} else {
      			scope.type = 'sent';
      		}
      		console.log(scope.type);
      	}
    };
  });
