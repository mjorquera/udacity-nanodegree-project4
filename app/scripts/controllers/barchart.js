'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:BarchartCtrl
 * @description
 * # BarchartCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('BarchartCtrl', ['metricsGatherer', function(metrics){
    var vm = this;

    metrics.getMetrics().then(function(data){
      vm.reported_issues = data.reported_issues;
      vm.labels = vm.reported_issues.map(function(issues) {return issues.day;});
      vm.series = ['Reported Issues'];
      vm.data = vm.reported_issues.map(function(issues) {return issues.number;});
    });

    
    
  }]);
