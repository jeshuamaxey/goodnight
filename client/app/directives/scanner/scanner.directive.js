'use strict';

angular.module('goodnightApp')
  .directive('scanner', function () {
    return {
      templateUrl: 'app/directives/scanner/scanner.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });