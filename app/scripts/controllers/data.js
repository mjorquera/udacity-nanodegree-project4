'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:DataCtrl
 * @description
 * # DataCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('DataCtrl', ['issueFinder', function(issue){
    var vm = this;
    vm.order = 'submission_timestamp';

    vm.setOrder = function(column){
      if (column == vm.order) {
        vm.order = '-' + column;  
      } else{
        vm.order = column;
      }
    };

    vm.getOrderClass = function (column){
      //if the current column is the one whos is ordering the table
      if (vm.order.includes(column)) {
        return vm.order.includes('-') ? 'des' : 'asc';
      } else {
        return 'dis';
      }
    };
    
    issue.getIssues().then(function (data) {
           var jsonIssues = Papa.parse(data, {header: true});
            vm.issues = jsonIssues.data;
         });
        
  }]);
