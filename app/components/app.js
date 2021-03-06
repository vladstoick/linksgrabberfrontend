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
    'youtube-embed',
    'ui.bootstrap'
  ])
  .constant('apiURL', 'https://linksgrabber.herokuapp.com')
  .config(function ($stateProvider, $authProvider, apiURL, $urlRouterProvider) {
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl : 'components/common/homepage.html',
          controller : 'HomePageCtrl'
        })
        .state('links',{
          url: '/links',
          templateUrl : 'components/links/links.html',
          controller : 'LinksCtrl'
        })
        .state('loginloading',{
          url: '/loginloading',
          templateUrl : 'components/login/loginloading.html',
          controller: 'LoginLoadingCtrl'
        })
        .state('login',{
          url: '/login',
          templateUrl : 'components/login/login.html',
          controller : 'LoginCtrl'
        })
        .state('logout',{
          url: '/logout',
          controller: 'LogoutCtrl'
        })
        .state('contact',{
          url :'/contact',
          templateUrl : 'components/common/contact.html',
          controller: 'ContactCtrl'
        })
        .state('slack',{
          url :'/slack',
          templateUrl : 'components/common/slack.html'
        })
        .state('settings',{
          url :'/settings',
          templateUrl : 'components/login/settings.html',
          controller : 'SettingsCtrl'
        })
        .state('privacyPolicy',{
          templateUrl : 'components/common/privacypolicy.html',
          url :'/privacypolicy'
        });
      $urlRouterProvider.otherwise(function(){
        return '/';
      });
      

      $authProvider.loginRedirect = '/loginloading';
      $authProvider.logoutRedirect = '/login';
      
      $authProvider.oauth2({
        name : 'slack',
        scope: 'read',
        clientId : '3565744729.3569294612',
        authorizationEndpoint : 'https://slack.com/oauth/authorize',
        url: apiURL + '/auth/slack',
        redirectUri: window.location.origin
      });
  })
  .factory('authHttpResponseInterceptor', ['$q','$location', '$injector', function($q, $location, $injector) {
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
