(() => {
  angular
    .module('myApp')
      .directive('myTable', myTable)
      .controller('MyTableController', MyTableController);

  function myTable() {
    return {
      restrict: 'E',
      controller: 'MyTableController',
      controllerAs: 'myTable',
      bindToController: true,
      templateUrl: './html/myTable.directive.html',
      scope: {
        list: '=',
      },
    };
  }

  function MyTableController() {
    const vm = this;
    vm.keys = Object.keys(vm.list[0]);

    vm.sortKey = vm.keys[0];
    vm.sortReverse = true;
  }
})();
