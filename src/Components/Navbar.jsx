import React, { useEffect, useState } from "react";
import Card1, { Card2, Card3, Card5 } from "./Cards";
import Forecast from "./Forecast";
import Main from "./Main";
import Chart from "./Chart";
import Footer from "./Footer";

const Navbar = () => {
  let [city, setCity] = useState();
  let [name, setName] = useState("mumbai");
  let [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=232c4483a75b4b3ca5692328223105&q=${search}&aqi=yes&days=10`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchApi();
  }, [search]);

  const inputEvent = (event) => {
    const val = event.target.value;
    console.log(val);
    setSearch(val);
  };

  return (
    <>
      <div className="p-2 lg:p-6 flex flex-col z-40 lg:flex-row items-center justify-between border-b-2 border-slate-600 dark:border-slate-200">
        <a href="index.html">
          <h1 className="text-2xl font-bold uppercase mx-0 lg:mx-16 dark:text-white">
            <img className="w-12 h-12 inline mr-2" src="./images/logo.png"/>Weather
          </h1>
        </a>
        <form
          className="m-2 lg:mr-32"
          onSubmit={(props) => {
            props.preventDefault();
            // setName(props.name);
            console.log(props.name);
            setSearch(name);
            // alert( `form submitted! ${name}`);
          }}
        >
          <input
            aria-label="search"
            className="outline-none p-2 w-72 rounded-l-full"
            type={"search"}
            placeholder="search city"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-white p-2 border-l-2 rounded-r-full"
            type="submit"
          >
            🔍
          </button>
        </form>
      </div>
      {city ? (
        <div className="flex flex-col lg:flex-row gap-3 w-full p-6">
          <Main
            temp_c={city.current.temp_c}
            city={city.location.name}
            condition={city.current.condition.text}
            imgsrc={city.current.condition.icon}
            max_temp={city.forecast.forecastday[0].day.maxtemp_c}
            min_temp={city.forecast.forecastday[0].day.mintemp_c}
            feels_like={city.current.feelslike_c}
            is_day={city.current.is_day}
          />

        <div className="lg:w-2/3 w-full flex flex-col sm:flex-row sm:gap-x-3">
          <div className="h-full w-full sm:w-1/2">
            <Forecast data={city.forecast.forecastday} />
            <Chart data = {city.forecast.forecastday[0].hour} />
          </div>

          <div className="flex flex-col gap-y-2 h-full w-full sm:w-1/2">
            <Card1
              uv={city.current.uv}
              humidity={city.current.humidity}
              wind={city.current.wind_kph}
            />
            <Card2
              sunrise={city.forecast.forecastday[0].astro.sunrise}
              sunset={city.forecast.forecastday[0].astro.sunset}
            />
            <Card5 
                defra = {(city.current.air_quality['gb-defra-index'])}
                humidity = {city.current.humidity}
                visibility = {city.current.vis_km}
            />
          </div>
        </div>
        </div>
      ) : (
        <p className="text-center p-4">city not found</p>
      )}
    </>
  );
};

export default Navbar;
