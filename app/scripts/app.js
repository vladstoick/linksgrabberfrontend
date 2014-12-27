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
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $authProvider.facebook({
        clientId: '399179793579362',
        redirectUri: window.location.origin +'' ,
        url:'https://da3fa.ngrok.com/auth/facebook'
      });
  });

