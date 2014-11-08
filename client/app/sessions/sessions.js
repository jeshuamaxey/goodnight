'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sessions', {
        templateUrl: 'app/sessions/sessions.html',
        controller: 'SessionsCtrl'
      });
  });
