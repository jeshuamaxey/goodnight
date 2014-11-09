'use strict';

angular.module('goodnightApp')
  .controller('MerchantCtrl', function ($scope, Purchase) {
    $scope.scannerOn = false;

    $scope.toggleScanner = function() {
      $scope.scannerOn = !$scope.scannerOn;
    }

    $scope.onSuccess = function(purchaseId) {
      console.log(purchaseId);
      purchaseId = "545f7ccf881b0a2536203ddf";
      var purchase = Purchase.get({purchaseId: purchaseId});
      purchase.status = "processing";
      purchase.update(function(completedPurchase) {
        console.log(completedPurchase);
      });
    };

    $scope.logError = function(err) {
      console.log('ERR: ', err)
    }


  });
