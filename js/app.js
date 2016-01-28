﻿(function() {
    'use strict';
    var smmWebApp = angular.module('SearchMyMindWebApp', ['ngRoute']);

    smmWebApp.config(function ($routeProvider) {
        $routeProvider.when('/feature1', {templateUrl: 'views/feature1.html', controller: 'FeatureController'});
        $routeProvider.when('/feature2', {templateUrl: 'views/feature2.html', controller: 'FeatureController'});
        $routeProvider.when('/feature3', {templateUrl: 'views/feature3.html', controller: 'FeatureController'});
        $routeProvider.when('/feature4', {templateUrl: 'views/feature4.html', controller: 'FeatureController'});
        $routeProvider.otherwise({redirectTo: '/feature1'});

    });

    smmWebApp.controller('FeatureController', function() {

    });

})();