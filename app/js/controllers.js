angular.module('weatherApp.controllers', [])
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','cities','ISO3166',
      function($scope,openWeatherMap,cities,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    $scope.cities = cities;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // Get daily forecast for initial page
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: cities[ 0 ]
    });
    $scope.fullForecast = openWeatherMap.queryForecastDaily({
      location: cities[ 0 ]
    });


    $scope.getForecastByLocation = function() {
      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
      $scope.fullForecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    // Change current location on buttons clicks

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
}])
