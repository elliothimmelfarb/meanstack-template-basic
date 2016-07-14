// MODULE //////////
(() => {
  angular
  .module('myApp', [
    'ui.router',
    'oitozero.ngSweetAlert',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
  ])
  .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
    });
    $urlRouterProvider.otherwise('/');
  }
})();
