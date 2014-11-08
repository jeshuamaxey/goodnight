'use strict';

describe('Service: Quest', function () {

  // load the service's module
  beforeEach(module('goodnightApp'));

  // instantiate service
  var Quest;
  beforeEach(inject(function (_Quest_) {
    Quest = _Quest_;
  }));

  it('should do something', function () {
    expect(!!Quest).toBe(true);
  });

});
