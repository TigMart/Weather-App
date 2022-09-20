import React from "react";
import "./CurrentWeather.scss";
import Parameters from "./Parameters";

const CurrentWeather = ({ data }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  let date = new Date();
  const DAY_NAME = dayNames[date.getDay()];
  const MONTH_NAME = monthNames[date.getMonth()];
  const DAY = date.getDate();

  return (
    <div className="weather">
      <div className="title-wrapper">
        <p className="country">{data.country},</p>
        <p className="city">{data.city}</p>
        <p className="today">{`${DAY_NAME}, ${MONTH_NAME} ${DAY}`}</p>
      </div>
      <div className="teperature-wrapper">
        <div className="weather-icon">
          <img src={`/icons/${data.weather[0].icon}.svg`} alt="weather" />
        </div>
        <div className="teperature">
          <p className="teperature-value">
            {Math.round(data.main.feels_like)}
            <sup style={{ fontSize: "28px" }}>°C</sup>
          </p>
          <span className="weather-description">
            {data.weather[0].description}
          </span>
        </div>
      </div>
      <div className="details">
        <Parameters
          icon="icons/pressure.svg"
          title="Pressure"
          value={`${data.main.pressure} hPa`}
        />
        <Parameters
          icon="icons/50d.svg"
          title="Wind"
          value={`${data.wind.speed} m/s`}
        />
        <Parameters
          icon="icons/humidity.svg"
          title="Humidity"
          value={`${data.main.humidity} %`}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
