var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=371f6db8219e3c50db7d39299cab90a2&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            //debugger;
            if (res.data.cod && res.data.message) {
                throw new Error("Unable to fetch weather for that location.");
            } else {
                return res.data.main.temp;
        }
    }, function (err) {
        throw new Error("Unable to fetch weather for that location.");
        });
    }
};
