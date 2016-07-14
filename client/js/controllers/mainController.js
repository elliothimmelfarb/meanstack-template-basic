// MainController
(() => {
  angular
    .module('myApp')
    .controller('mainController', mainController);

  function mainController() {
    console.log('mainCtrl!');
    const vm = this; // viewmodel capture controllerAs with vm Y032
    vm.name = 'mainController';
  }
})();
