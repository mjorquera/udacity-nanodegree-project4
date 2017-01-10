'use strict';

describe('Service: officeFinder', function () {

  // load the service's module
  beforeEach(module('corporateDashboardApp'));

  // instantiate service
  var officeFinder;
  beforeEach(inject(function (_officeFinder_) {
    officeFinder = _officeFinder_;
  }));

  it('should do something', function () {
    expect(!!officeFinder).toBe(true);
  });

});
