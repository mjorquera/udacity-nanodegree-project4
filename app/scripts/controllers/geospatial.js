'use strict';

/**
 * @ngdoc function
 * @name corporateDashboardApp.controller:GeospatialCtrl
 * @description
 * # GeospatialCtrl
 * Controller of the corporateDashboardApp
 */
angular.module('corporateDashboardApp')
  .controller('GeospatialCtrl', ['$interval', 'officeFinder', function ($interval, office) {
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

    $interval(function () {
        var max = 2000;
        var min = 1;

        var minLat = -90;
        var maxLat = 90;

        var minLng = -180;
        var maxLng = 180;

        $.each(vm.markers, function(key, data){
          var rndEmployees = Math.floor(Math.random() * (max - min + 1)) + min;
          var rndLat = Math.floor(Math.random() * (maxLat - minLat + 1)) + minLat;
          var rndLng = Math.floor(Math.random() * (maxLng - minLng + 1)) + minLng;

          data.message = rndEmployees + " employees.";
          data.lat = rndLat;
          data.lng = rndLng; 
          console.log(rndEmployees);
        });
      }, 5000);

  }]);
