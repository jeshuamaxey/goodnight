'use strict';

angular.module('goodnightApp')
  .service('Purchase', function ($resource) {
    return $resource('api/purchasess/:purchaseId', {purchaseId: '@id'});
  });
