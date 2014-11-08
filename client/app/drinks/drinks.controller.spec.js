'use strict';

describe('Controller: DrinksCtrl', function () {

  // load the controller's module
  beforeEach(module('goodnightApp'));

  var DrinksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrinksCtrl = $controller('DrinksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
