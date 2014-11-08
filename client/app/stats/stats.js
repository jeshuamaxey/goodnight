'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stats', {
        templateUrl: 'app/stats/stats.html',
        controller: 'StatsCtrl'
      });
  });
