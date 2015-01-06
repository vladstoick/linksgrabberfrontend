'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:inlineimageview
 * @description
 * # inlineimageview
 */
angular.module('linksgrabberApp')
  .directive('inlineimageview', function () {
  	function isImage(url){
  		var acceptRegex = /^[^#]+?\.(gif|jpe?g|png)(?:[?&#_].*|$)/i;
        var results = acceptRegex.exec(url);
        return results !== null;
  	}
    return {
      	templateUrl : 'views/directives/inlineimageview.html',
      	scope: {
      		iivsrc : '=',
          iivshouldshowimages : '='
      	},
      	restrict: 'E',
        controller : function ($scope) {
          $scope.$watch('iivshouldshowimages', function(newValue){
            $scope.shouldShowImage = newValue;
          });
        },
      	link: function postLink(scope) {
      		scope.shouldShowImage = false;
      		scope.url = '';
        	if(isImage(scope.iivsrc)){
           		scope.url = scope.iivsrc;
        	}
      	}
      	
    };
  });
