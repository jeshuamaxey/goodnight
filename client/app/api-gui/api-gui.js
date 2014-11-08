'use strict';

angular.module('goodnightApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/api-gui', {
        templateUrl: 'app/api-gui/api-gui.html',
        controller: 'ApiGuiCtrl'
      });
  });
