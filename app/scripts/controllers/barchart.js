'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:BarchartCtrl
 * @description
 * # BarchartCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('BarchartCtrl', ['metricsGatherer', '$interval', function(metrics, $interval){
    var vm = this;

    metrics.getMetrics().then(function(data){
      vm.reported_issues = data.reported_issues;
      vm.labels = vm.reported_issues.map(function(issues) {return issues.day;});
      vm.series = ['Reported Issues'];
      vm.data = vm.reported_issues.map(function(issues) {return issues.number;});
      vm.options = {
            animation : false,  // Edit: correction typo: from 'animated' to 'animation'
        };
    });

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    $interval(function () {
        var max = 2000;
        var min = 1;

        var lastLabel = new Date(vm.labels[vm.labels.length - 1]);
        var nextDay = addDays(lastLabel, 1);
        var nextLabel = (nextDay.getMonth() + 1) + '/' + nextDay.getDate() + '/' +  nextDay.getFullYear();
        var nextNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        //delete first element of the array
        vm.labels.shift();
        vm.data.shift();

        //add next data
        vm.labels.push(nextLabel.toLocaleString());
        vm.data.push(nextNumber);
      }, 2000);
    
    
  }]);
