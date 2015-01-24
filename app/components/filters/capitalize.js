'use strict';

/**
 * @ngdoc filter
 * @name linksgrabberApp.filter:fromNow
 * @function
 * @description
 * # fromNow
 * Filter in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .filter('capitalize', function () {
	return function(date) {
		return moment(date).fromNow();
	};
  });
