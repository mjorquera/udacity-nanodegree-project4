'use strict';

/**
 * @ngdoc service
 * @name corporateDashboardApp.metricsGatherer
 * @description
 * # metricsGatherer
 * Service in the corporateDashboardApp.
 */
angular.module('corporateDashboardApp')
  .service('metricsGatherer', function () {
      var service = this;
      service.data = {};
      this.getMetrics = function() {
         return $.get('/data/metrics.json');
      };

      this.getOpenIssues = function() {
          $.get('/data/metrics.json').then(function(data){
            service.data = data;
            return service.data.open_issues;
          })
      };

      this.getPayingCustomers = function(){
          return service.data.paying_customers;
        };

      this.getReportedIssues = function(){
          return service.data.reported_issues;
        };
  });
