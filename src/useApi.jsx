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
      // console.log(data);
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

// export const useWeather = (locationData) => {
//   const [weathearData, setWeatherData] = useState(null);

//   const lat = locationData?.latitude;
//   const lon = locationData?.longitude;

//   const getWeatherData = async (lat, lon) => {
//     try {
//       const res = await axios.get(
//         `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       );
//       const data = res?.data;
//       setWeatherData(res?.data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     if (lat && lon) {
//       getWeatherData();
//     }
//   }, [lat, lon]);

//   return {
//     weathearData,
//   };
// };

export const useWeather = (locationData) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const lat = locationData?.latitude;
        const lon = locationData?.longitude;

        // Ensure non-empty values
        if (lat !== undefined && lon !== undefined) {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          );
          const data = res?.data;
          setWeatherData(data);
          console.log(data);
        } else {
          console.error("Latitude or longitude is undefined");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        console.log("Error response:", error.response);
      }
    };

    getWeatherData();
  }, [locationData]);

  return {
    weatherData,
  };
};
