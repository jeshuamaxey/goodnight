'use strict';

angular.module('goodnightApp')
  .factory('Place', function ($resource) {
    return $resource('api/places/:placeId', {placeId: '@id'});
  });
