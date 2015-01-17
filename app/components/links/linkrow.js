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
    		shouldshowallmedia : '='
    	},
      templateUrl: 'components/links/linkrow.html',
      restrict: 'E'
    };
  });
