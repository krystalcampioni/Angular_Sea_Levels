angular.module("weatherApp",["ngRoute","weatherApp.filters","weatherApp.services","weatherApp.directives","weatherApp.controllers","iso-3166-country-codes"]).config(["$routeProvider",function($routeProvider){$routeProvider.when("/forecast",{templateUrl:"forecast.html",controller:"OpenWeatherCtrl"}),$routeProvider.otherwise({redirectTo:"/forecast"})}]);
angular.module("weatherApp.services",["ngResource"]).value("cities",["Amsterdam, NL","London, UK","Berlin, DE","Paris, FR","Madrid, ES"]).factory("openWeatherMap",function($resource){var apiKey="0ecce192500d1a71eb05d1ef815147cc",apiBaseUrl="http://api.openweathermap.org/data/2.5/";return $resource(apiBaseUrl+":path/:subPath?q=:location",{APPID:apiKey,mode:"json",callback:"JSON_CALLBACK",units:"metric",lang:"en"},{queryWeather:{method:"JSONP",params:{path:"weather"},isArray:!1,headers:{"x-api-key":apiKey}},queryForecast:{method:"JSONP",params:{path:"forecast",cnt:5},isArray:!1,headers:{"x-api-key":apiKey}},queryForecastDaily:{method:"JSONP",params:{path:"forecast",subPath:"daily",cnt:7},isArray:!1,headers:{"x-api-key":apiKey}}})});
angular.module("weatherApp.controllers",[]).controller("OpenWeatherCtrl",["$scope","openWeatherMap","cities",function($scope,openWeatherMap,cities){$scope.message="",$scope.hasState="",$scope.cities=cities,$scope.iconBaseUrl="http://openweathermap.org/img/w/",$scope.forecast=openWeatherMap.queryForecast({location:cities[0]}),$scope.currentWeather=openWeatherMap.queryWeather({location:cities[0]}),$scope.getForecastByLocation=function(){$scope.forecast=openWeatherMap.queryForecast({location:$scope.location}),$scope.currentWeather=openWeatherMap.queryWeather({location:$scope.location})},$scope.setLocation=function(loc){$scope.location=loc,$scope.getForecastByLocation()},$scope.getIconImageUrl=function(iconName){return iconName?$scope.iconBaseUrl+iconName+".png":""}}]);
angular.module("weatherApp.filters",[]).filter("interpolate",["version",function(version){return function(text){return String(text).replace(/\%VERSION\%/gm,version)}}]).filter("placeholder",[function(){return function(input,phvalue){return angular.isUndefined(input)||""==input?phvalue:input}}]);
angular.module("weatherApp.directives",[]).directive("forecastItem",[function(){return{scope:{useDayForecast:"=showEntry",forecast:"=forecastItem"},templateUrl:"_forecast-item.html",link:function(scope,element,attrs){scope.getIconImageUrl=function(iconName){return iconName?"http://openweathermap.org/img/w/"+iconName+".png":""},scope.isNine=function(dt_txt){return _.includes(dt_txt,"09:00")}}}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNlcnZpY2VzLmpzIiwiY29udHJvbGxlcnMuanMiLCJmaWx0ZXJzLmpzIiwiZGlyZWN0aXZlcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwib3RoZXJ3aXNlIiwicmVkaXJlY3RUbyIsInZhbHVlIiwiZmFjdG9yeSIsIiRyZXNvdXJjZSIsImFwaUtleSIsImFwaUJhc2VVcmwiLCJBUFBJRCIsIm1vZGUiLCJjYWxsYmFjayIsInVuaXRzIiwibGFuZyIsInF1ZXJ5V2VhdGhlciIsIm1ldGhvZCIsInBhcmFtcyIsInBhdGgiLCJpc0FycmF5IiwiaGVhZGVycyIsIngtYXBpLWtleSIsInF1ZXJ5Rm9yZWNhc3QiLCJjbnQiLCJxdWVyeUZvcmVjYXN0RGFpbHkiLCJzdWJQYXRoIiwiJHNjb3BlIiwib3BlbldlYXRoZXJNYXAiLCJjaXRpZXMiLCJtZXNzYWdlIiwiaGFzU3RhdGUiLCJpY29uQmFzZVVybCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJjdXJyZW50V2VhdGhlciIsImdldEZvcmVjYXN0QnlMb2NhdGlvbiIsInNldExvY2F0aW9uIiwibG9jIiwiZ2V0SWNvbkltYWdlVXJsIiwiaWNvbk5hbWUiLCJmaWx0ZXIiLCJ2ZXJzaW9uIiwidGV4dCIsIlN0cmluZyIsInJlcGxhY2UiLCJpbnB1dCIsInBodmFsdWUiLCJpc1VuZGVmaW5lZCIsImRpcmVjdGl2ZSIsInNjb3BlIiwidXNlRGF5Rm9yZWNhc3QiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJzIiwiaXNOaW5lIiwiZHRfdHh0IiwiXyIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUUMsT0FBTyxjQUNiLFVBQ0EscUJBQ0Esc0JBQ0Esd0JBQ0EseUJBQ0EsMkJBRUZDLFFBQVEsaUJBQWtCLFNBQVNDLGdCQUNqQ0EsZUFBZUMsS0FBSyxhQUFjQyxZQUFhLGdCQUFpQkMsV0FBWSxvQkFDNUVILGVBQWVJLFdBQVdDLFdBQVk7QUNWeENSLFFBQVFDLE9BQU8sdUJBQXdCLGVBQ3BDUSxNQUFNLFVBQVUsZ0JBQWdCLGFBQWEsYUFBYSxZQUFZLGVBRXRFQyxRQUFRLGlCQUFrQixTQUFTQyxXQUVsQyxHQUFJQyxRQUFTLG1DQUNUQyxXQUFhLHlDQUVqQixPQUFPRixXQUFVRSxXQUFhLDhCQUUxQkMsTUFBT0YsT0FDUEcsS0FBTSxPQUNOQyxTQUFVLGdCQUNWQyxNQUFPLFNBQ1BDLEtBQU0sT0FHTkMsY0FDRUMsT0FBUSxRQUNSQyxRQUNFQyxLQUFNLFdBRVJDLFNBQVMsRUFDVEMsU0FDRUMsWUFBYWIsU0FHakJjLGVBQ0VOLE9BQVEsUUFDUkMsUUFDRUMsS0FBTSxXQUNOSyxJQUFLLEdBRVBKLFNBQVMsRUFDVEMsU0FDRUMsWUFBYWIsU0FHakJnQixvQkFDRVIsT0FBUSxRQUNSQyxRQUNFQyxLQUFNLFdBQ05PLFFBQVMsUUFDVEYsSUFBSyxHQUVQSixTQUFTLEVBQ1RDLFNBQ0VDLFlBQWFiO0FDL0N6QlosUUFBUUMsT0FBTyw2QkFDWkssV0FBVyxtQkFDVCxTQUFTLGlCQUFpQixTQUN6QixTQUFTd0IsT0FBT0MsZUFBZUMsUUFFakNGLE9BQU9HLFFBQVUsR0FDakJILE9BQU9JLFNBQVcsR0FFbEJKLE9BQU9FLE9BQVNBLE9BQ2hCRixPQUFPSyxZQUFjLG1DQUdyQkwsT0FBT00sU0FBV0wsZUFBZUwsZUFDL0JXLFNBQVVMLE9BQVEsS0FJcEJGLE9BQU9RLGVBQWlCUCxlQUFlWixjQUNyQ2tCLFNBQVVMLE9BQVEsS0FHcEJGLE9BQU9TLHNCQUF3QixXQUM3QlQsT0FBT00sU0FBV0wsZUFBZUwsZUFDL0JXLFNBQVVQLE9BQU9PLFdBRW5CUCxPQUFPUSxlQUFpQlAsZUFBZVosY0FDckNrQixTQUFVUCxPQUFPTyxZQU1yQlAsT0FBT1UsWUFBYyxTQUFTQyxLQUM1QlgsT0FBT08sU0FBV0ksSUFDbEJYLE9BQU9TLHlCQUdUVCxPQUFPWSxnQkFBa0IsU0FBU0MsVUFDaEMsTUFBUUEsVUFBV2IsT0FBT0ssWUFBY1EsU0FBVyxPQUFTO0FDdENsRTNDLFFBQVFDLE9BQU8seUJBRVoyQyxPQUFPLGVBQWdCLFVBQVcsU0FBU0MsU0FDMUMsTUFBTyxVQUFTQyxNQUNkLE1BQU9DLFFBQU9ELE1BQU1FLFFBQVEsZ0JBQWlCSCxhQUloREQsT0FBTyxlQUFnQixXQUN0QixNQUFPLFVBQVVLLE1BQU1DLFNBQ3JCLE1BQVFsRCxTQUFRbUQsWUFBWUYsUUFBbUIsSUFBVEEsTUFBZUMsUUFBVUQ7QUNWckVqRCxRQUFRQyxPQUFPLDRCQUNabUQsVUFBVSxnQkFBZ0IsV0FDekIsT0FDRUMsT0FDRUMsZUFBZ0IsYUFDaEJsQixTQUFVLGlCQUdaL0IsWUFBYSxzQkFFYmtELEtBQU0sU0FBU0YsTUFBT0csUUFBU0MsT0FDN0JKLE1BQU1YLGdCQUFrQixTQUFTQyxVQUMvQixNQUFRQSxVQUFXLG1DQUFxQ0EsU0FBVyxPQUFTLElBRzlFVSxNQUFNSyxPQUFTLFNBQVNDLFFBQ3RCLE1BQU9DLEdBQUVDLFNBQVNGLE9BQVEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd3ZWF0aGVyQXBwJywgW1xuICAnbmdSb3V0ZScsXG4gICd3ZWF0aGVyQXBwLmZpbHRlcnMnLFxuICAnd2VhdGhlckFwcC5zZXJ2aWNlcycsXG4gICd3ZWF0aGVyQXBwLmRpcmVjdGl2ZXMnLFxuICAnd2VhdGhlckFwcC5jb250cm9sbGVycycsXG4gIFwiaXNvLTMxNjYtY291bnRyeS1jb2Rlc1wiXG5dKS5cbmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignL2ZvcmVjYXN0Jywge3RlbXBsYXRlVXJsOiAnZm9yZWNhc3QuaHRtbCcsIGNvbnRyb2xsZXI6ICdPcGVuV2VhdGhlckN0cmwnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy9mb3JlY2FzdCd9KTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCd3ZWF0aGVyQXBwLnNlcnZpY2VzJywgWyduZ1Jlc291cmNlJ10pXG4gIC52YWx1ZSgnY2l0aWVzJyxbJ0Ftc3RlcmRhbSwgTkwnLCdMb25kb24sIFVLJywnQmVybGluLCBERScsJ1BhcmlzLCBGUicsJ01hZHJpZCwgRVMnXSlcblxuICAuZmFjdG9yeSgnb3BlbldlYXRoZXJNYXAnLCBmdW5jdGlvbigkcmVzb3VyY2UpIHtcblxuICAgIHZhciBhcGlLZXkgPSAnMGVjY2UxOTI1MDBkMWE3MWViMDVkMWVmODE1MTQ3Y2MnO1xuICAgIHZhciBhcGlCYXNlVXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41Lyc7XG5cbiAgICByZXR1cm4gJHJlc291cmNlKGFwaUJhc2VVcmwgKyAnOnBhdGgvOnN1YlBhdGg/cT06bG9jYXRpb24nLFxuICAgICAge1xuICAgICAgICBBUFBJRDogYXBpS2V5LFxuICAgICAgICBtb2RlOiAnanNvbicsXG4gICAgICAgIGNhbGxiYWNrOiAnSlNPTl9DQUxMQkFDSycsXG4gICAgICAgIHVuaXRzOiAnbWV0cmljJyxcbiAgICAgICAgbGFuZzogJ2VuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcXVlcnlXZWF0aGVyOiB7XG4gICAgICAgICAgbWV0aG9kOiAnSlNPTlAnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGF0aDogJ3dlYXRoZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0FycmF5OiBmYWxzZSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAneC1hcGkta2V5JzogYXBpS2V5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBxdWVyeUZvcmVjYXN0OiB7XG4gICAgICAgICAgbWV0aG9kOiAnSlNPTlAnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGF0aDogJ2ZvcmVjYXN0JyxcbiAgICAgICAgICAgIGNudDogNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNBcnJheTogZmFsc2UsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYXBpLWtleSc6IGFwaUtleVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcXVlcnlGb3JlY2FzdERhaWx5OiB7XG4gICAgICAgICAgbWV0aG9kOiAnSlNPTlAnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGF0aDogJ2ZvcmVjYXN0JyxcbiAgICAgICAgICAgIHN1YlBhdGg6ICdkYWlseScsXG4gICAgICAgICAgICBjbnQ6IDdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQXJyYXk6IGZhbHNlLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICd4LWFwaS1rZXknOiBhcGlLZXlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3dlYXRoZXJBcHAuY29udHJvbGxlcnMnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ09wZW5XZWF0aGVyQ3RybCcsXG4gICAgWyckc2NvcGUnLCdvcGVuV2VhdGhlck1hcCcsJ2NpdGllcycsXG4gICAgICBmdW5jdGlvbigkc2NvcGUsb3BlbldlYXRoZXJNYXAsY2l0aWVzKSB7XG5cbiAgICAkc2NvcGUubWVzc2FnZSA9ICcnO1xuICAgICRzY29wZS5oYXNTdGF0ZSA9ICcnO1xuXG4gICAgJHNjb3BlLmNpdGllcyA9IGNpdGllcztcbiAgICAkc2NvcGUuaWNvbkJhc2VVcmwgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nO1xuXG4gICAgLy8gR2V0IGRhaWx5IGZvcmVjYXN0IGZvciBpbml0aWFsIHBhZ2VcbiAgICAkc2NvcGUuZm9yZWNhc3QgPSBvcGVuV2VhdGhlck1hcC5xdWVyeUZvcmVjYXN0KHtcbiAgICAgIGxvY2F0aW9uOiBjaXRpZXNbIDAgXVxuICAgIH0pO1xuXG4gICAgLy8gJHNjb3BlLmZvcmVjYXN0LmN1cnJlbnRXZWF0aGVyID0gXCJhaG95XCI7XG4gICAgJHNjb3BlLmN1cnJlbnRXZWF0aGVyID0gb3BlbldlYXRoZXJNYXAucXVlcnlXZWF0aGVyKHtcbiAgICAgIGxvY2F0aW9uOiBjaXRpZXNbIDAgXVxuICAgIH0pO1xuXG4gICAgJHNjb3BlLmdldEZvcmVjYXN0QnlMb2NhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLmZvcmVjYXN0ID0gb3BlbldlYXRoZXJNYXAucXVlcnlGb3JlY2FzdCh7XG4gICAgICAgIGxvY2F0aW9uOiAkc2NvcGUubG9jYXRpb25cbiAgICAgIH0pO1xuICAgICAgJHNjb3BlLmN1cnJlbnRXZWF0aGVyID0gb3BlbldlYXRoZXJNYXAucXVlcnlXZWF0aGVyKHtcbiAgICAgICAgbG9jYXRpb246ICRzY29wZS5sb2NhdGlvblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIENoYW5nZSBjdXJyZW50IGxvY2F0aW9uIG9uIGJ1dHRvbnMgY2xpY2tzXG5cbiAgICAkc2NvcGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbihsb2MpIHtcbiAgICAgICRzY29wZS5sb2NhdGlvbiA9IGxvYztcbiAgICAgICRzY29wZS5nZXRGb3JlY2FzdEJ5TG9jYXRpb24oKTtcbiAgICB9O1xuXG4gICAgJHNjb3BlLmdldEljb25JbWFnZVVybCA9IGZ1bmN0aW9uKGljb25OYW1lKSB7XG4gICAgICByZXR1cm4gKGljb25OYW1lID8gJHNjb3BlLmljb25CYXNlVXJsICsgaWNvbk5hbWUgKyAnLnBuZycgOiAnJyk7XG4gICAgfTtcbn1dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ3dlYXRoZXJBcHAuZmlsdGVycycsIFtdKVxuXG4gIC5maWx0ZXIoJ2ludGVycG9sYXRlJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHRleHQpLnJlcGxhY2UoL1xcJVZFUlNJT05cXCUvbWcsIHZlcnNpb24pO1xuICAgIH1cbiAgfV0pXG5cbiAgLmZpbHRlcigncGxhY2Vob2xkZXInLCBbZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCxwaHZhbHVlKSB7XG4gICAgICByZXR1cm4gKGFuZ3VsYXIuaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09ICcnKSA/IHBodmFsdWUgOiBpbnB1dDtcbiAgICB9O1xuICB9XSlcbiIsImFuZ3VsYXIubW9kdWxlKCd3ZWF0aGVyQXBwLmRpcmVjdGl2ZXMnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnZm9yZWNhc3RJdGVtJyxbZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGU6IHtcbiAgICAgICAgdXNlRGF5Rm9yZWNhc3Q6ICc9c2hvd0VudHJ5JyxcbiAgICAgICAgZm9yZWNhc3Q6ICc9Zm9yZWNhc3RJdGVtJyxcbiAgICAgIH0sXG5cbiAgICAgIHRlbXBsYXRlVXJsOiAnX2ZvcmVjYXN0LWl0ZW0uaHRtbCcsXG5cbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzY29wZS5nZXRJY29uSW1hZ2VVcmwgPSBmdW5jdGlvbihpY29uTmFtZSkge1xuICAgICAgICAgIHJldHVybiAoaWNvbk5hbWUgPyAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nICsgaWNvbk5hbWUgKyAnLnBuZycgOiAnJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NvcGUuaXNOaW5lID0gZnVuY3Rpb24oZHRfdHh0KXtcbiAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhkdF90eHQsICcwOTowMCcpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XSlcbiJdfQ==
