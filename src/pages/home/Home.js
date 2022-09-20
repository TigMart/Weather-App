import React from "react";
import CurrentWeather from "../../components/current-weather/CurrentWeather";
import { useForecastContext } from "../../components/Provider";
import Search from "../../components/search/Search";
import "./Home.scss";

const Home = () => {
  const { currentWeather, handleOnSearchChange } = useForecastContext();

  return (
    <section className="container-wrapper">
      <header className="header">
        <Search onSearchChange={handleOnSearchChange} />
      </header>
      <main className="main">
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </main>
    </section>
  );
};

export default Home;
