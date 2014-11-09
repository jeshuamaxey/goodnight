'use strict';

angular.module('goodnightApp')
  .service('Purchase', function ($resource) {
    return $resource('api/purchases/:purchaseId', {purchaseId: '@id'}, {
        'update': { method:'PUT' }
    });
  });
