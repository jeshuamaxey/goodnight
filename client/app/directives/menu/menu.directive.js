'use strict';

angular.module('goodnightApp')
  .directive('menu', function (Purchase) {
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
          var purchase = [];
          scope.drinks.forEach(function(drink) {
            if(drink.quantity > 0) {
              for(var c = 0; c < drink.quantity; c++) purchase.push(drink._id);
            }
          });
          console.log(Purchase)
        }
      }
    };
  });