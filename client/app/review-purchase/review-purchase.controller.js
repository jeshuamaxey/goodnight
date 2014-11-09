'use strict';

angular.module('goodnightApp')
  .controller('ReviewPurchaseCtrl', function ($scope, Purchase, Drink, $routeParams) {
    $scope.noIdError = false;

    // wierd ass bug - $route§Params doesn't have a value in the key field
    // it should be purchaseId (see menu.jade)
    var purchaseId = $routeParams.purchaseId;

    if(purchaseId) {
      // $scope.purchase = Purchase.get({purchaseId: purchaseId})

      Purchase.get({purchaseId: purchaseId}, function(purchase) {
        $scope.purchase = purchase;

        $scope.purchase.drinks.forEach(function(drinkId) {
          Drink.get({drinkId: drinkId}, function(drink) {
            console.log(drink)
          });
        });

      });
    } else {
      $scope.noIdError = true;
    }
  });
