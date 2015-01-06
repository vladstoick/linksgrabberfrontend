'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:linkDirective
 * @description
 * # linkDirective
 */
angular.module('linksgrabberApp')
  .directive('linkrow', function () {
    return {
    	scope: {
    		data : '=',
    		shouldshowallimages : '='
    	},
      	templateUrl: 'views/directives/linkrow.html',
      	restrict: 'E'
    };
  });