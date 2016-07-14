// MainController
angular.module('myApp')
  .controller('mainController', mainController);

function mainController(SweetAlert) {
  console.log('mainCtrl!');
  SweetAlert.swal('hey');
}
