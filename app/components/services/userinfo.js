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
      provider : '',
      apiToken : '',
      authToken : '',
      firstLoad : true
    };

    var facebookAuthToken = '';

    user.logout = function(){
      $auth.logout();
      user.isAuthenticated = false;
      $rootScope.$broadcast('logout');
    };

    user.isAuthenticated = false;

    user.login = function (provider){
      var promise =  $auth.authenticate(provider);
      promise.then(function(){
        localStorage.provider = provider;
      });
      return promise;
    };

    user.loadData = function(){
      user.provider = localStorage.provider;
      user.authToken = $auth.getPayload().token;
      user.apiToken = $auth.getPayload().userAuth;
      if(user.provider === 'facebook'){
        user.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+user.authToken;   
        $http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+user.authToken).success(function(data){
          user.fullName = data.name;
        });
      }
      
    }

    if($auth.isAuthenticated() === true){
      user.isAuthenticated = true;
      user.loadData();
    }

    return user;

  });
