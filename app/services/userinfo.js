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

    var user = {
      fullName : '',
      profilePic : '',
      facebookToken : '',
      apiToken: '',
    };6

    user.logout = function(){
      $auth.logout();
      user.profilePic = '';
      user.fullName = '';
      user.authToken = '';
      user.isAuthenticated = false;
      $rootScope.$broadcast('logout');
    };

    user.isAuthenticated = false;

    user.login = function (provider){
      $auth.authenticate(provider).then(function(){
        user.isAuthenticated = true;
        loadData(); 
      });
    };

    function loadData(){
      user.authToken = $auth.getPayload().token;
      user.apiToken = $auth.getPayload().userAuth;
      user.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+user.authToken;   
      $http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+user.authToken).success(function(data){
        user.fullName = data.name;
        // $rootScope.$broadcast('userDataLoaded');
      });
      
    }

    if($auth.isAuthenticated() === true){
      user.isAuthenticated = true;
      loadData();
    }

    return user;

  });
