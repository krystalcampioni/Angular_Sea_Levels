angular.module('weatherApp.directives', [])
  .directive('forecastItem',[function factory() {
    return {
      scope: {
        useDayForecast: '=showEntry',
        forecast: '=forecastItem',
      },

      templateUrl: '_forecast-item.html',

      link: function(scope, element, attrs) {
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.isNine = function(dt_txt){
          return _.includes(dt_txt, '09:00')
        };
      }
    }
  }])
