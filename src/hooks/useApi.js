import { useEffect, useState } from "react";
import axios from "axios";

const LOCATION_URL = import.meta.env.VITE_LOCATION_API;

const WEATHER_URl = import.meta.env.VITE_WEATHER_API;

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const locationInfo = () => {
  const [locationData, setLocationData] = useState({});

  const getUserLocation = async () => {
    try {
      const response = await axios.get(LOCATION_URL);
      const data = response?.data;
      setLocationData(data);
    } catch (error) {
      error.response;
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    locationData,
  };
};

export const useWeather = (locationData) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const lat = locationData?.latitude;
        const lon = locationData?.longitude;

        if (lat !== undefined && lon !== undefined) {
          const res = await axios.get(
            `${WEATHER_URl}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
          );
          const data = res?.data;
          setWeatherData(data);
        }
      } catch (error) {
        error.response;
      }
    };

    getWeatherData();
  }, [locationData]);

  return {
    weatherData,
  };
};
