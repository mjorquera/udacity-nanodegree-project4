'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:GeospatialCtrl
 * @description
 * # GeospatialCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('GeospatialCtrl', ['$stateParams', 'officeFinder', function ($stateParams, office) {
    var vm = this;

    vm.mapcenter = {
      lat: 0,
      lng: 0,
      zoom: 2
    };

    office.getOffices().then(function(data){
      vm.offices = data;
      var office_markers = [];
      $.each(data, function (key, value) {

        var marker = {
          lat: value.lat,
          lng: value.long,
          message: value.employee_number + " employees.",
          draggable: false,
          focus: false
        }

        if (key == 0 ) { marker.focus = true; }
        office_markers.push(marker);
      });

      angular.extend(vm,{
        markers: office_markers,
        defaults: {
            scrollWheelZoom: false
        }});
    });


  }]);
