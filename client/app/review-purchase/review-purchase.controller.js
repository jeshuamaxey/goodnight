'use strict';

angular.module('goodnightApp')
  .controller('ReviewPurchaseCtrl', function ($scope, Purchase, Drink, $routeParams, User) {
    $scope.missingIdError = false;
    $scope.payCodeVisible = false;

    $scope.user = User.get();

    // wierd ass bug - $route§Params doesn't have a value in the key field
    // it should be purchaseId (see menu.jade)
    var purchaseId = $routeParams.purchaseId;
    
    // var qrcode = document.createElement('qrcode');
    // $(qrcode).attr('size', 200);
    // $(qrcode).attr('data', purchaseId);
    // $('.pay-code-wrapper').append(qrcode);
    
    // $('qrcode').attr('data', purchaseId);

    console.log(purchaseId);

    if(purchaseId) {

      Purchase.get({purchaseId: purchaseId}, function(purchase) {
        $scope.purchase = purchase;
        $scope.drinks = []

        $scope.purchase.drinks.forEach(function(drinkId, drinkIdIndex) {
          Drink.get({drinkId: drinkId}, function(drink) {
            var i = 0;
            if($scope.drinks.some(function(d, index) {
              if(d._id === drink._id) {
                i = index;
                return true; 
              } else {
                return false;
              }
            })) {
              // drink is in scope array
              $scope.drinks[i].quantity++; 
            } else {
              // drink is not in scope array
              drink.quantity = 1;
              $scope.drinks.push(drink);
            }
            // calculate price at the end
            if(drinkIdIndex == $scope.purchase.drinks.length-1) {
              $scope.price = 0;
              $scope.drinks.forEach(function(drink) {
                $scope.price += drink.price * drink.quantity;
              });
            }
          });
        }); // end of $scope.purchase.drinks.forEach()
      }); // end of Purchase.get()
    } else {
      $scope.missingIdError = true;
    }

    $scope.togglePayCodeVisibility = function() {
      $scope.payCodeVisible = !$scope.payCodeVisible;
    };

  });
