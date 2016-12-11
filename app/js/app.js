angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.filters',
  'weatherApp.services',
  'weatherApp.directives',
  'weatherApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'forecast.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
