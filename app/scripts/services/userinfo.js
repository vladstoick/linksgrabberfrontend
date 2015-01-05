'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.UserInfo
 * @description
 * # UserInfo
 * Factory in the linksgrabberApp.
 */
angular.module('linksgrabberApp')
  .factory('UserInfo', function ($auth, $http, $rootScope) {

    var obj = {
      fullName : '',
      profilePic : ''
    };

    obj.logout = function(){
      $auth.logout();
      obj.profilePic = '';
      obj.fullName = '';
      console.log('aaa');
    };

    obj.isAuthenticated = $auth.isAuthenticated;

    obj.login = function (provider){
      $auth.authenticate(provider).then(function(){
        loadData(); 
      });
    };

    function loadData(){
      var token = $auth.getPayload().token;
      obj.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+token;   
      $http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+token).success(function(data){
        obj.fullName = data.name;
        // $rootScope.$broadcast('userDataLoaded');
      });
      
    }

    if(obj.isAuthenticated() === true){
      loadData();
    }

    return obj;

  });
