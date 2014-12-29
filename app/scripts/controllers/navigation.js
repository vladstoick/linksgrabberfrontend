'use strict';

/**
 * @ngdoc function
 * @name linksgrabberApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the linksgrabberApp
 */
angular.module('linksgrabberApp')
  .controller('NavigationCtrl', function ($scope, $auth, $rootScope, $http, $location) {
	$scope.isAuthenticated = function(){
		return $auth.isAuthenticated();
	};
  	$scope.logout = function(){
  		$auth.logout();
  		$rootScope.$emit('authenticateStateChanged',false);
  	};
  	$scope.profilePic = '';
  	$scope.fullName = '';
    $scope.isOnMainPage = function(){
      return $location.path() === '/';
    };

  	function loadUserData(){
  		var token = $auth.getPayload().token;
  		$scope.profilePic = 'https://graph.facebook.com/v2.2/me/picture?width=100&height=100&access_token='+token;  		
  		$http.get('https://graph.facebook.com/v2.2/me?fields=name&access_token='+token)
  			.success(function(data){
  				$scope.fullName = data.name;
  			});
  	}

   	if( $auth.getToken()){
  		loadUserData($auth.getPayload());
  	}
  	$rootScope.$on('authenticateStateChanged', function(event, data){
  		if(data === true){
  			// $scope.isAuthenticated = true;
  			loadUserData();
  		}
  	});


  });
