angular.module('weatherApp.controllers', [])
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','cities',
      function($scope,openWeatherMap,cities) {

    $scope.message = '';
    $scope.hasState = '';

    $scope.cities = cities;

    // Get daily forecast for initial page
    $scope.forecast = openWeatherMap.queryForecast({
      location: cities[ 0 ]
    });

    // $scope.forecast.currentWeather = "ahoy";
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
