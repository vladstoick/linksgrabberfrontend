'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.links
 * @description
 * # links
 * Factory in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .factory('Links', function ($http, UserInfo, apiURL, $rootScope) { 
    return {
      getReceivedLinksPage : function(page){
        return $http({
          method : 'GET',
          url : apiURL + '/users/me/links/received',
          params : {
            auth_token : UserInfo.apiToken,
            page : page
          }
        });
      },
      getSentLinksPage : function(page){
        return $http({
          method : 'GET',
          url : apiURL + '/users/me/links/sent',
          params : {
            auth_token : UserInfo.apiToken,
            page : page
          }
        });
      },
    };
  });
