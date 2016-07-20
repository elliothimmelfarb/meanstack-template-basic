(() => {
  angular
    .module('myApp')
      .directive('myTable', myTable)
      .directive('myTextColor', myTextColor)
      .directive('myDraggable', myDraggable)
      .controller('MyTableController', MyTableController);

  function myDraggable($document) {
    return {
      link: function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        element.css({
          position: 'relative',
          // border: '1px solid red',
          // backgroundColor: 'lightgrey',
          cursor: 'pointer',
        });

        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px',
          });
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      },
    };
  }

  function myTextColor() {
    const directive = {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        elem.css('color', attrs.myTextColor);
      },
    };
    return directive;
  }

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
      link: (scope, element) => {
        element.children('table.table').addClass('table-hover');
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
