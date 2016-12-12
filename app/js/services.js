angular.module('weatherApp.services', ['ngResource'])
  .value('cities',['Amsterdam, NL','London, UK','Berlin, DE','Paris, FR','Madrid, ES'])

  .factory('openWeatherMap', function($resource) {

    var apiKey = '0ecce192500d1a71eb05d1ef815147cc';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            cnt: 5
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
      }
    )
  });
