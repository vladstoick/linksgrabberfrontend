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
    var Links = {
      items : [],
      isBusy : false,
      isDone : false,
      page : 1,
      totalPages : -1
    };

    $rootScope.$on('logout',function(){
      Links.items = [];
      Links.isBusy = false;
      Links.isDone = false;
      Links.page = 1;
      Links.totalPages = -1;
    });

    Links.nextPage = function(){
      if(Links.page > Links.totalPages && Links.totalPages!==-1){
        Links.isDone = true;
        return;
      }
      Links.isBusy = true;
      $http({
        method : 'GET',
        url : apiURL + '/users/me/links',
        params : {
          auth_token : UserInfo.apiToken,
          page : Links.page
        }
      }).success(function(data) {
        Links.totalPages = data.paging.total_pages;
        data = data.links.map(function(link){
          link.sender.facebookImgUrl = 'https://graph.facebook.com/v2.2/' +
          link.sender.facebook_id + '/picture?width=100&height=100';    
          return link;
        });
        for(var i = 0; i < data.length ; i++){
          Links.items.push(data[i]);
        }
        Links.isBusy = false;
      });
      Links.page++;
    };
    return Links;
  });
