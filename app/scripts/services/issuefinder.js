'use strict';

/**
 * @ngdoc service
 * @name corporateDashboardApp.issueFinder
 * @description
 * # issueFinder
 * Service in the corporateDashboardApp.
 */
angular.module('corporateDashboardApp')
  .service('issueFinder', function () {
       this.getIssues = function() {
      return $.get( '/data/issues_data.csv' );
    };
  });
