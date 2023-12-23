import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const locationInfo = () => {
  const [locationData, setLocationData] = useState({});

  const getUserLocation = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      const data = response?.data;
      setLocationData(data);
    } catch (error) {
      error("Error fetching user location");
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

        // Ensure non-empty values
        if (lat !== undefined && lon !== undefined) {
          // const res = await axios.get(
          //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
          // );
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
