'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:LinechartCtrl
 * @description
 * # LinechartCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('LinechartCtrl',  ['metricsGatherer', function(metrics){
    var vm = this;

    metrics.getMetrics().then(function(data){
      vm.paying_customers = data.paying_customers;
      vm.labels = vm.paying_customers.map(function(customers) {return customers.day;});
      vm.series = ['Customers'];
      vm.data = vm.paying_customers.map(function(customers) {return customers.number;});
    });

  }]);
