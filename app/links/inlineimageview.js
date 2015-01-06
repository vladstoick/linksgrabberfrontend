'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:inlineimageview
 * @description
 * # inlineimageview
 */
angular.module('linksgrabberApp')
  .directive('inlineimageview', function () {
  	function getImage(url){
  		var acceptRegex = /^[^#]+?\.(gif|jpe?g|png)(?:[?&#_].*|$)/i;
      var results = acceptRegex.exec(url);
      if(results !== null) {
        return results[0];
      } 
      return '';
  	}
    return {
      	templateUrl : 'links/inlineimageview.html',
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
      		scope.shouldShowImage = scope.iivshouldshowimages;
      		scope.url = '';
          var imgUrl = getImage(scope.iivsrc);
        	if( imgUrl !== ''){
           		scope.url = imgUrl;
        	}
      	}
      	
    };
  });
