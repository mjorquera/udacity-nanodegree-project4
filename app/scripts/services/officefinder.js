'use strict';

/**
 * @ngdoc service
 * @name corporateDashboardApp.officeFinder
 * @description
 * # officeFinder
 * Service in the corporateDashboardApp.
 */
angular.module('corporateDashboardApp')
  .service('officeFinder', function () {
    this.getOffices = function() {
      return $.get( '/data/geospatial.json' );
    };
  });
