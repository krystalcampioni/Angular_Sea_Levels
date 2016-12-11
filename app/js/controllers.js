angular.module('weatherApp.controllers', [])
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','cities',
      function($scope,openWeatherMap,cities) {

    $scope.message = '';

    $scope.cities = cities;

    // Get forecast for sea levels modal
    $scope.forecast = openWeatherMap.queryForecast({
      location: cities[ 0 ]
    });

    // Get weather info for initial page
    $scope.currentWeather = openWeatherMap.queryWeather({
      location: cities[ 0 ]
    });

    $scope.getForecastByLocation = function() {
      $scope.forecast = openWeatherMap.queryForecast({
        location: $scope.location
      });
      $scope.currentWeather = openWeatherMap.queryWeather({
        location: $scope.location
      });
    };

    // Change current location on buttons clicks
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };
}])
