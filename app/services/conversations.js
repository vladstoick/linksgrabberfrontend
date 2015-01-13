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
    var Conversations = {
      conversations : [],
      isBusy : false,
      isDone : false,
      page : 1,
      totalPages : -1
    };

    $rootScope.$on('logout',function(){
      Conversations.items = [];
      Conversations.isBusy = false;
      Conversations.isDone = false;
      Conversations.page = 1;
      Conversations.totalPages = -1;
    })

    Conversations.nextPage = function(){
      if(Conversations.page > Conversations.totalPages && Conversations.totalPages!==-1){
        Conversations.isDone = true;
        return;
      }
      Conversations.isBusy = true;
      $http({
        method : 'GET',
        url : apiURL + '/users/me/threads',
        params : {
          auth_token : UserInfo.apiToken,
          page : Conversations.page
        }
      }).success(function(data) {
        Conversations.totalPages = data.paging.total_pages;
        data = data.threads;
        for(var i = 0; i < data.length ; i++){
          Conversations.conversations.push(data[i]);
        }
        Conversations.isBusy = false;
      });
      Conversations.page++;
    }

    return Conversations;

  });
