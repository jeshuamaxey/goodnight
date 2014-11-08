'use strict';

angular.module('goodnightApp')
  .factory('Place', function () {
    return $resource('api/places/:placeId', {placeId: '@id'});
  });
