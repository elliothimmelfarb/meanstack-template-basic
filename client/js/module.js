'use strict';

// MODULE //////////

angular.module('myApp', ['ui.router', 'oitozero.ngSweetAlert'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
    })
  $urlRouterProvider.otherwise('/');
});
