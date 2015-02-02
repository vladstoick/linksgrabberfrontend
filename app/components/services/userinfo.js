'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.UserInfo
 * @description
 * # UserInfo
 * Factory in the linksgrabberApp.
 */

angular.module('linksgrabberApp')
  .factory('UserInfo', function ($auth, $http, $rootScope, apiURL) {

    var user = {
      fullName : '',
      profilePic : '',
      backendApiToken : '',
      firstLoad : true,
      // slack : {}
    };

    var facebookAuthToken = '';

    user.logout = function(){
      $auth.logout();
      user.isAuthenticated = false;
      // localStorage.clear();
      $rootScope.$broadcast('logout');
    };

    user.isAuthenticated = false;

    user.login = function (loginProvider){
      var promise =  $auth.authenticate(loginProvider);
      promise.then(function(){
        localStorage.provider = loginProvider;
        // localStorage[loginProvider] = 'true'
        user.isAuthenticated = true;
        user.loadData();
      });
      return promise;
    };

    user.loadData = function(){
      user.backendApiToken = $auth.getPayload().userAuth;
      user.provider = localStorage.provider;
      // if(localStorage.facebook === 'true'){
      //   user.providers.push('facebook');
      // }
      
      
      // if(user.provider === 'facebook'){
      //   user.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+user.authToken;   
      //   $http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+user.authToken).success(function(data){
      //     user.fullName = data.name;
      //   });
      // }
      if(user.provider === 'slack'){
        $http({
          method : 'GET',
          url : apiURL + '/users/me/slack/info',
          params : {
            auth_token : user.backendApiToken
          }
        }).success(function(data){
          user.fullName = data.user.name;
          user.profilePic = data.user.profile.image_192;
          console.log(data);
        }).error(function(data){
          console.log(data);
        });
      }
      
    }

    if($auth.isAuthenticated() === true){
      user.loadData();
      user.isAuthenticated = true;
    }
    return user;

  });
