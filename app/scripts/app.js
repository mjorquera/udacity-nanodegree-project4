'use strict';

/**
 * @ngdoc overview
 * @name corporateDashboardApp
 * @description
 * # corporateDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('corporateDashboardApp', ['leaflet-directive','ui.router','chart.js'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/geospatial.html',
        controller: 'GeospatialCtrl as geospatial'
      })
      .state('metrics', {
        url: '/metrics',
        templateUrl: 'views/metrics.html',
        controller: 'MetricsCtrl as metrics'
      })      
      .state('data', {
        url: '/data',
        templateUrl: 'views/data.html',
        controller: 'DataCtrl as data'
      });
  }]);
