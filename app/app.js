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
        .state('login',{
          url: '/login',
          templateUrl : 'common/login.html',
          controller : 'LoginCtrl'
        });
      $urlRouterProvider.otherwise('/');
      $authProvider.facebook({
        clientId: '399179793579362',
        scope: ['email','public_profile','read_mailbox'],
        url: apiURL + '/auth/facebook'
      });
  });

