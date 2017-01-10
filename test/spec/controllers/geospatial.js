'use strict';

describe('Controller: GeospatialCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateDashboardApp'));

  var GeospatialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeospatialCtrl = $controller('GeospatialCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeospatialCtrl.awesomeThings.length).toBe(3);
  });
});
