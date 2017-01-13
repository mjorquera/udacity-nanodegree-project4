'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:MetricsCtrl
 * @description
 * # MetricsCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('MetricsCtrl', ['metricsGatherer', '$interval', function(metrics, $interval){
    var vm = this;


    metrics.getMetrics().then(function(data){
      vm.open_issues = data.open_issues;
    });
    
      $interval(function () {
        var max = 1000;
        var min = 10;
          vm.open_issues = Math.floor(Math.random() * (max - min + 1)) + min;
      }, 2000);
  }]);
