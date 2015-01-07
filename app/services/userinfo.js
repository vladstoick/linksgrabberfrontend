'use strict';

/**
 * @ngdoc service
 * @name linksgrabberApp.UserInfo
 * @description
 * # UserInfo
 * Factory in the linksgrabberApp.
 */

angular.module('linksgrabberApp')
  .factory('UserInfo', function ($auth, $http) {

    var user = {
      fullName : '',
      profilePic : ''
    };

    user.logout = function(){
      $auth.logout();
      user.profilePic = '';
      user.fullName = '';
      console.log('aaa');
    };

    user.isAuthenticated = $auth.isAuthenticated;

    user.login = function (provider){
      $auth.authenticate(provider).then(function(){
        loadData(); 
      });
    };

    function loadData(){
      var token = $auth.getPayload().token;
      user.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+token;   
      $http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+token).success(function(data){
        user.fullName = data.name;
        // $rootScope.$broadcast('userDataLoaded');
      });
      
    }

    if(user.isAuthenticated() === true){
      loadData();
    }

    return user;

  });
