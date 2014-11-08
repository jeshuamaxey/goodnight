'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/drinks', {
        templateUrl: 'app/drinks/drinks.html',
        controller: 'DrinksCtrl'
      });
  });
