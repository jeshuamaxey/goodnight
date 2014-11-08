'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/places', {
        templateUrl: 'app/places/places.html',
        controller: 'PlacesCtrl'
      });
  });
