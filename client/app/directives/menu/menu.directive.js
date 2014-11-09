'use strict';

angular.module('goodnightApp')
  .directive('menu', function (Purchase, User, $location) {
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
        scope.sendPurchase = function($event) {
          $event.preventDefault();

          var drinks = [];
          scope.drinks.forEach(function(drink) {
            if(drink.quantity > 0) {
              for(var c = 0; c < drink.quantity; c++) drinks.push(drink._id);
            }
          });

          // add the user id to the purchase object
          User.get(function(user) {
            var purchase = new Purchase();
            purchase.userIdString = user._id;
            purchase.time = Date.now();
            purchase.drinks = drinks;
            purchase.$save(function(pendingPurchase) {
              // sorry for routing from a directive, but it is a hackathon
              $location.url('review-purchase?purchaseId='+pendingPurchase._id);
            });

          })

        }
      }
    };
  });
