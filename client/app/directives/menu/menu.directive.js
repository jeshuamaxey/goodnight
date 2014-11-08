'use strict';

angular.module('goodnightApp')
  .directive('menu', function () {
    return {
      templateUrl: 'app/directives/menu/menu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });