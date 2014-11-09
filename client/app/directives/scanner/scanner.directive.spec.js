'use strict';

describe('Directive: scanner', function () {

  // load the directive's module and view
  beforeEach(module('goodnightApp'));
  beforeEach(module('app/directives/scanner/scanner.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scanner></scanner>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the scanner directive');
  }));
});