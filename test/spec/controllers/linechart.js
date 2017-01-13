'use strict';

describe('Controller: LinechartCtrl', function () {

  // load the controller's module
  beforeEach(module('corporateDashboardApp'));

  var LinechartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinechartCtrl = $controller('LinechartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LinechartCtrl.awesomeThings.length).toBe(3);
  });
});
