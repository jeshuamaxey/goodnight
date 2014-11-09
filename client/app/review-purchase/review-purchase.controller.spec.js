'use strict';

describe('Controller: ReviewPurchaseCtrl', function () {

  // load the controller's module
  beforeEach(module('goodnightApp'));

  var ReviewPurchaseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewPurchaseCtrl = $controller('ReviewPurchaseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
