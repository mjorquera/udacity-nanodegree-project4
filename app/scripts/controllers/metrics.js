'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('MetricsCtrl', ['metricsGatherer', function(metrics){
    var vm = this;


    metrics.getMetrics().then(function(data){
      console.log(data);
      vm.open_issues = data.open_issues;
    });
    
  }]);
