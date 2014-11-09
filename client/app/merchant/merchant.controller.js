'use strict';

angular.module('goodnightApp')
  .controller('MerchantCtrl', function ($scope, Purchase, $http) {
    $scope.scannerOn = false;
    $scope.puchaseStatus = null;
    $('#success').hide()

    $scope.toggleScanner = function() {
      $scope.scannerOn = !$scope.scannerOn;
    }

    $scope.onSuccess = function(purchaseId) {
      console.log(purchaseId);
      purchaseId = "545f7ccf881b0a2536203ddf";
      var purchase = Purchase.get({purchaseId: purchaseId});
      // purchase.status = "processing";
      // purchase.update(function(completedPurchase) {
      //   console.log(completedPurchase);
      // });

      $scope.puchaseStatus = "successful";
        $('qr-scanner').remove();
        $('#success').fadeIn(400)

      // $http.put('api/purchases/'+purchaseId+'?status=processing', function(processedPurchase) {
      //   // console.log(processedPurchase);
      //   $scope.puchaseStatus = "successful";
      //   $('qr-scanner').remove();
      // })
    };


    $scope.logError = function(err) {
      console.log('ERR: ', err)
    }


  });
