// MainController
(() => {
  angular
    .module('myApp')
    .controller('MainController', MainController);

  function MainController() {
    const vm = this;
    vm.names = ['Do', 'Trang', 'Grog', 'Bo'];

    vm.tacos = [
      {
        meat: 'chicken',
        cheese: 'nacho',
      },
      {
        meat: 'beef',
        cheese: 'cheddar',
      },
      {
        meat: 'tofurkey',
        cheese: 'provolone',
      },
    ];
  }
})();
