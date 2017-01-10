'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:GeospatialCtrl
 * @description
 * # GeospatialCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('GeospatialCtrl', ['officeFinder', function (office) {
    var vm = this;

    office.getOffices().then(function(data){
      vm.offices = data;
    });

  }]);
