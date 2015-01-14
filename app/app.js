'use strict';

/**
 * @ngdoc overview
 * @name linksgrabberApp
 * @description
 * # linksgrabberApp
 *
 * Main module of the application.
 */

angular
  .module('linksgrabberApp', [
    'infinite-scroll',
    'ui.router',
    'satellizer',
    'youtube-embed'
  ])
  .constant('apiURL', 'https://linksgrabber.herokuapp.com')
  .config(function ($stateProvider, $authProvider, apiURL, $urlRouterProvider) {
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl : 'common/main.html',
          controller : 'MainCtrl'
        })
        .state('links',{
          url: '/links',
          templateUrl : 'links/links.html',
          controller : 'LinksCtrl'
        })
        .state('conversations',{
          url: '/conversations',
          templateUrl: 'conversations/conversations.html',
          controller : 'ConversationsCtrl'
        })
        .state('conversationsdetail',{
          url: '/conversations/:conversationid',
          templateUrl: 'conversations/conversationdetail.html',
          controller : 'ConversationDetailCtrl'
        })
        .state('loginloading',{
          url: '/loginloading',
          templateUrl : 'common/loginloading.html',
          controller: 'LoginLoadingCtrl'
        })
        .state('login',{
          url: '/login',
          templateUrl : 'common/login.html',
          controller : 'LoginCtrl'
        })
        .state('logout',{
          url: '/logout',
          controller: 'LogoutCtrl'
        })
        .state('privacyPolicy',{
          url :'/privacypolicy',
          templateUrl : 'common/privacypolicy.html'
        })
      $urlRouterProvider.otherwise(function($injector, $location){
        return '/';
      });
      

      $authProvider.loginRedirect = '/loginloading';
      $authProvider.logoutRedirect = '/login';
      $authProvider.facebook({
        clientId: '399179793579362',
        scope: ['email','public_profile','read_mailbox'],
        url: apiURL + '/auth/facebook',
      });
  })
  .factory('authHttpResponseInterceptor', ['$q','$location', '$injector', function($q, $location, $injector, $auth) {
    return {
        response: function(response){
          return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401 ) {
                var stateService = $injector.get('$state');
                stateService.go('logout');
            }
            return $q.reject(rejection);
        }
    };
  }])
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
  });
