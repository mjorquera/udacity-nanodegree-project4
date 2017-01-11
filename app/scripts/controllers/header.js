'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('HeaderCtrl', ['$state', function ($state) {
    var vm = this;
    var current;
    if(window.location.href.includes("data")){
        current = "data";
    } else if (window.location.href.includes("metrics")) {
      current = "metrics";
    } else {
      current = "home";
    }
    vm.currentStateName = current;

    vm.setCurrent = function (name){
      vm.currentStateName = name;
    };
  }]);
