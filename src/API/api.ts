import axios from "axios";

export const currentWeatherAPI = {
  getCurrentWeather(city: string | number[] | null) {
    let options = {
      method: "GET",
      url: "http://api.weatherapi.com/v1/current.json",
      params: {
        q: `${city}`,
        key: `7cccd13bf522431bbc7145324221910`,
      },
    };
    return axios.request(options);
  },
};
export const forecastWeatherAPI = {
  getForecastWeather(city: string | number[] | null) {
    let options = {
      method: "GET",
      url: "http://api.weatherapi.com/v1/forecast.json",
      params: {
        q: `${city}`,
        key: `7cccd13bf522431bbc7145324221910`,
        days: "14",
      },
    };
    return axios.request(options);
  },
};
