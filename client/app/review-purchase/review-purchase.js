'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review-purchase', {
        templateUrl: 'app/review-purchase/review-purchase.html',
        controller: 'ReviewPurchaseCtrl'
      });
  });
