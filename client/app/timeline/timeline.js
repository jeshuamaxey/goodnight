'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/timeline', {
        templateUrl: 'app/timeline/timeline.html',
        controller: 'TimelineCtrl'
      });
  });
