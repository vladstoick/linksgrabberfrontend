'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.conversations
 * @description
 * # conversations
 * Factory in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .factory('Conversations', function (UserInfo, $http, apiURL, $rootScope) {
    
    return {
      getConversationsPage : function(page){
        return $http({
          method : 'GET',
          url : apiURL + '/users/me/threads',
          params : {
            auth_token : UserInfo.apiToken,
            page : page
          }
        });
      },
      getConversationPageForThread : function(page,thread){
        return $http({
          method : 'GET',
          url : apiURL + '/users/me/threads/' + thread,
          params : {
            auth_token : UserInfo.apiToken,
            page : page
          }
        });
      }
    };

  });
