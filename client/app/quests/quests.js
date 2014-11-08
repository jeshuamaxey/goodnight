'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/quests', {
        templateUrl: 'app/quests/quests.html',
        controller: 'QuestsCtrl'
      });
  });
