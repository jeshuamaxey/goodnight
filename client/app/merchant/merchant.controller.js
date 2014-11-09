'use strict';

angular.module('goodnightApp')
  .controller('MerchantCtrl', function ($scope) {
    $scope.scannerOn = false;

    $scope.toggleScanner = function() {
      $scope.scannerOn = !$scope.scannerOn; 
    }


  });
