'use strict';

angular.module('goodnightApp')
  .directive('menu', function (Purchase, $http) {
    return {
      templateUrl: 'app/directives/menu/menu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.addDrinkToPurchase = function(i) {
          if(scope.drinks[i].quantity) scope.drinks[i].quantity++
          else scope.drinks[i].quantity = 1;
        }
        scope.removeDrinkFromPurchase = function(i) {
          scope.drinks[i].quantity = 0;
        }
        scope.sendPurchase = function() {
          var drinks = [];
          scope.drinks.forEach(function(drink) {
            if(drink.quantity > 0) {
              for(var c = 0; c < drink.quantity; c++) drinks.push(drink._id);
            }
          });
          var purchase = new Purchase();
          console.log(purchase)
          purchase.drinks = drinks;
          console.log(purchase)
          purchase.$save();

          // var purchase = {
          //   drinks: drinks
          // };

          // $http.post('api/purchases', purchase);

        }
      }
    };
  });