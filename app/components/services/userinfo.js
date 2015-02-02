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
      backendApiToken : '',
      firstLoad : true,
      slack : {}
    };

    var facebookAuthToken = '';

    user.logout = function(){
      $auth.logout();
      user.isAuthenticated = false;
      localStorage.clear();
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
      user.provider = localStorage.provider;
      user.backendApiToken = $auth.getPayload().userAuth;
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
        user.slack.apiToken = $auth.getPayload().token;
        user.slack.userId = $auth.getPayload().slackUserId;
        $http({
          method : 'GET',
          url : 'https://slack.com/api/users.info',
          params : {
            token : user.slack.apiToken,
            user: user.slack.userId
          }
        })
        .success(function(data){
          console.log(data);
        })
        .error(function(data){
          console.log(data);
        });
      }
      
    }

    if($auth.isAuthenticated() === true){
      user.isAuthenticated = true;
      user.loadData();
    }

    return user;

  });
