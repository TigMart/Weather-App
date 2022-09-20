import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Forecasts.scss";
import { useForecastContext } from "../../components/Provider";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecasts = () => {
  const { forecast, WEEK_DAYS, handleClick } = useForecastContext();
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <section className="container-wrapper">
      <div className="top">
        <button className="btn btn-back" onClick={handleClick}>
          {<IoMdArrowRoundBack />}
        </button>
        <p className="forecast-title">Next 7 days</p>
      </div>
      <div className="bottom">
        <Accordion allowZeroExpanded>
          {forecast ? (
            forecast.list.splice(0, 7).map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <label className="day">{forecastDays[idx]}</label>
                      <div className="weather-params">
                        <label className="min-max">
                          {Math.round(item.main.temp_min)}°C /
                          {Math.round(item.main.temp_max)}°C
                        </label>
                        <img
                          alt="weather"
                          className="icon-small"
                          src={`icons/${item.weather[0].icon}.svg`}
                        />
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details">
                    <div className="daily-details-item">
                      <label>Pressure</label>
                      <span>{item.main.pressure} hPa</span>
                    </div>
                    <div className="daily-details-item">
                      <label>Humidity</label>
                      <span>{item.main.humidity} %</span>
                    </div>
                    <div className="daily-details-item">
                      <label>Clouds</label>
                      <span>{item.clouds.all} %</span>
                    </div>
                    <div className="daily-details-item">
                      <label>Wind speed</label>
                      <span>{item.wind.speed} m/s</span>
                    </div>
                    <div className="daily-details-item">
                      <label>Sea level</label>
                      <span>{item.main.sea_level} m</span>
                    </div>
                    <div className="daily-details-item">
                      <label>Feels like</label>
                      <span>{Math.round(item.main.feels_like)}°C</span>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))
          ) : (
            <div></div>
          )}
        </Accordion>
      </div>
    </section>
  );
};

export default Forecasts;
