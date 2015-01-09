'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.conversations
 * @description
 * # conversations
 * Factory in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .factory('Conversations', function (UserInfo, $http, apiURL) {
    var conversations = [];
    var isBusy = false;
    var isDone = false;
    var page = 1;
    var totalPages = -1;

    function nextPage(){
      isBusy = true;
      if(page > totalPages && totalPages!==-1){
        isDone = true;
        return;
      }
      $http({
        method : 'GET',
        url : apiURL + '/users/me/threads',
        params : {
          auth_token : UserInfo.apiToken,
          page : page
        }
      }).success(function(data) {
        totalPages = data.paging.total_pages;
        data = data.threads;
        for(var i = 0; i < data.length ; i++){
          conversations.push(data[i]);
        }
        isBusy = false;
      });
      page++;
    }

    

    return {
      nextPage : nextPage,
      isDone : isDone,
      isBusy : isBusy,
      conversations : conversations
    };

  });
