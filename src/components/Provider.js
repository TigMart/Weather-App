import React, { useContext, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { GEO_API_URL, geoApiOptions } from "../api";

export const ForecastContext = React.createContext(null);
export const useForecastContext = () => useContext(ForecastContext);

const Provider = ({ component: Component }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(null);
  const [flip, setFlip] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlip(!flip);
  };
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.country} ${city.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    handleOnSearchChange(searchData);
  };

  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const [country, city] = searchData.label.split(" ");

    const CurrentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ country, city, ...weatherResponse });
        setForecast({ country, city, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <ForecastContext.Provider
      value={{
        currentWeather,
        forecast,
        handleOnSearchChange,
        WEEK_DAYS,
        handleClick,
        loadOptions,
        handleOnChange,
        search,
        flip,
      }}
    >
      <Component />
    </ForecastContext.Provider>
  );
};

export default Provider;
