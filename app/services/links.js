'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.links
 * @description
 * # links
 * Factory in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .factory('Links', function ($http, $auth, apiURL) {



    
    var items = [];
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
        url : apiURL + '/users/me/links',
        params : {
          auth_token : $auth.getPayload().userAuth,
          page : page
        }
      }).success(function(data) {
        totalPages = data.paging.total_pages;
        data = data.links.map(function(link){
          link.sender.facebookImgUrl = 'http://graph.facebook.com/v2.2/' +
          link.sender.facebook_id + '/picture?width=100&height=100';    
          //TODO move this
          var acceptRegex = /^[^#]+?\.(gif|jpe?g|png)(?:[?&#_].*|$)/i;
          var results = acceptRegex.exec(link.text);
          if(results !== null){
            link.isImage = true;
          } else {
            link.isImage = false;
          }
          //link.isImage = acceptRegex.exec(link.text) !== null;
          return link;
        });
        for(var i = 0; i < data.length ; i++){
          items.push(data[i]);
        }
        isBusy = false;
      });
      page++;
    }

    

    return {
      nextPage : nextPage,
      isDone : isDone,
      isBusy : isBusy,
      items: items
    };
  });
