'use strict';

angular.module('goodnightApp')
  .factory('Drink', function ($resource, $http) {
    return $resource('api/drinks/:drinkId', {drinkId: '@id'});
  });
