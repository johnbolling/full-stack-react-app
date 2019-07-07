const request = require('request-promise');

require('dotenv').config();

const { WEATHER_API_KEY } = process.env;

class Weather {
  static retrieveByCity(city, callback) {
    request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}&units=imperial`,
      json: true
    })
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API' });
      });
  }
}
console.log('xxx');

module.exports = Weather;
