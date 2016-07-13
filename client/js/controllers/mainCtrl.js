'use strict';

angular.module('myApp')

.controller('mainCtrl', function(SweetAlert) {
  console.log('mainCtrl!');
  SweetAlert.swal('Working!')
});
