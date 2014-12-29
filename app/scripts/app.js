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
  .constant('apiURL', 'https://linksgrabber.herokuapp.com')
  .config(function ($routeProvider, $authProvider, apiURL) {
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
        scope: ['email','public_profile','read_mailbox'],
        url: apiURL + '/auth/facebook'
      });
  });

