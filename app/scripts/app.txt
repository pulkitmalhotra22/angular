'use strict';

var simpleFormApp = angular.module('simpleFormApp', [
        'ngResource',
        'ngRoute',
        'ngAria',
        'numberOnly',
        'alphabetOnly']);

// configure application routes

simpleFormApp.config(["$routeProvider", "$locationProvider",
  function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/form.html',
            controller: 'formCtrl'
        })
    }]);
