angular.module('weatherApp.directives', [])
  .directive('forecastItem',[function factory() {
    return {
      scope: {
        useDayForecast: '=showEntry',
        forecast: '=forecastItem',
      },

      templateUrl: '_forecast-item.html',

      link: function(scope, element, attrs) {
        scope.isNine = function(dt_txt){
          return _.includes(dt_txt, '09:00')
        };
      }
    }
  }])
