'use strict';

describe('Controller: ApiGuiCtrl', function () {

  // load the controller's module
  beforeEach(module('goodnightApp'));

  var ApiGuiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiGuiCtrl = $controller('ApiGuiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
