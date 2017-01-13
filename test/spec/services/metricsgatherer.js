'use strict';

describe('Service: metricsGatherer', function () {

  // load the service's module
  beforeEach(module('corporateDashboardApp'));

  // instantiate service
  var metricsGatherer;
  beforeEach(inject(function (_metricsGatherer_) {
    metricsGatherer = _metricsGatherer_;
  }));

  it('should do something', function () {
    expect(!!metricsGatherer).toBe(true);
  });

});
