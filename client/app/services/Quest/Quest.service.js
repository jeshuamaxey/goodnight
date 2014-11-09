'use strict';

angular.module('goodnightApp')
  .factory('Quest', function ($resource) {
    return $resource('api/quests/:questId', {
      questId: '@id',
      user: '@user'
    });
  });
