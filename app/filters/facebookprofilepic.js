'use strict';

/**
 * @ngdoc filter
 * @name linksgrabberApp.filter:facebookprofilepic
 * @function
 * @description
 * # fromNow
 * Filter in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .filter('facebookProfilePic', function () {
	return function(id) {
		return 'https://graph.facebook.com/v2.2/' + id 
		+ '/picture?width=100&height=100';    
	}
  });
