'use strict';

describe('Service: issueFinder', function () {

  // load the service's module
  beforeEach(module('corporateDashboardApp'));

  // instantiate service
  var issueFinder;
  beforeEach(inject(function (_issueFinder_) {
    issueFinder = _issueFinder_;
  }));

  it('should do something', function () {
    expect(!!issueFinder).toBe(true);
  });

});
