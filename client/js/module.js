// MODULE //////////

angular.module('myApp', ['ui.router', 'oitozero.ngSweetAlert'])
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
    });
  $urlRouterProvider.otherwise('/');
}
