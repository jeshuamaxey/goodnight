'use strict';

describe('Service: Drink', function () {

  // load the service's module
  beforeEach(module('goodnightApp'));

  // instantiate service
  var Drink;
  beforeEach(inject(function (_Drink_) {
    Drink = _Drink_;
  }));

  it('should do something', function () {
    expect(!!Drink).toBe(true);
  });

});
