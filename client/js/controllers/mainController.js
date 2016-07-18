// MainController
(() => {
  angular
    .module('myApp')
    .controller('mainController', mainController);

  function mainController($scope) {
    console.log('mainCtrl!');
    const vm = $scope; // viewmodel capture controllerAs with vm Y032
    vm.name = 'mainController';
  }
})();
