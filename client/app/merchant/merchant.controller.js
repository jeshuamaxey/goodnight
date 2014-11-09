'use strict';

angular.module('goodnightApp')
  .controller('MerchantCtrl', function ($scope, Purchase) {
    $scope.scannerOn = false;

    $scope.toggleScanner = function() {
      $scope.scannerOn = !$scope.scannerOn;
    }

    $scope.onSuccess = function(purchaseId) {
      console.log(purchaseId);
      purchaseId = "545f4624d8ad4d7d2215fdd1";
      var purchase = Purchase.get({purchaseId: purchaseId});
      purchase.status = "processing";
      purchase.$save(function(completedPurchase) {
        console.log(completedPurchase);
      });
    };

    $scope.logError = function(err) {
      console.log('ERR: ', err)
    }


  });
