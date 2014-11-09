'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/merchant', {
        templateUrl: 'app/merchant/merchant.html',
        controller: 'MerchantCtrl'
      });
  });
