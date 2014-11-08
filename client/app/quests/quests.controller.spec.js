'use strict';

describe('Controller: QuestsCtrl', function () {

  // load the controller's module
  beforeEach(module('goodnightApp'));

  var QuestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestsCtrl = $controller('QuestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
