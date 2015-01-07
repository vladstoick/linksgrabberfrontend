'use strict';

/**
 * @ngdoc directive
 * @name linksgrabberApp.directive:inlineimageview
 * @description
 * # inlineimageview
 */
angular.module('linksgrabberApp')
  .directive('inlinemediaview', function () {
  	function getImage(url){
  		var acceptRegex = /^[^#]+?\.(gif|jpe?g|png)(?:[?&#_].*|$)/i;
      var results = acceptRegex.exec(url);
      if(results !== null) {
        return results[0];
      } 
      return '';
  	}

    function getYoutube(url){
      var optionOne = /^https?:\/\/(?:www\.|m\.)?youtube\.com\/watch\?.*v=([\w\-]+)/i;
      var optionTwo = /^https?:\/\/(?:www\.)?youtu\.be\/([\w\-]+)/i;
      var results1 = optionOne.exec(url);
      var results2 = optionTwo.exec(url);
      if(results1 !== null){
        return results1[0];
      }
      if(results2 !== null){
        return results2[0];
      }
      return '';
    }

    return {
      	templateUrl : 'links/inlinemediaview.html',
      	scope: {
      		iivsrc : '=',
          iivshouldshowmedia : '='
      	},
      	restrict: 'E',
        controller : function ($scope) {
          $scope.$watch('iivshouldshowmedia', function(newValue){
            $scope.shouldShowMedia = newValue;
          });
        },
      	link: function postLink(scope) {
      		scope.shouldShowMedia = scope.iivshouldshowmedia;
      		scope.url = '';
          var imgUrl = getImage(scope.iivsrc);
          var youtubeUrl = getYoutube(scope.iivsrc);
        	if( imgUrl !== ''){
            scope.urlView = 'links/inlineimageview.html';
           	scope.url = imgUrl;
            scope.type = "image";
        	} else if(youtubeUrl !== ''){
            scope.urlView = 'links/inlineyoutubeview.html';
            scope.url = youtubeUrl;
            scope.type = "video";
          }
      	}
      	
    };
  });
