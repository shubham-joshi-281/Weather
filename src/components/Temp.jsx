import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";
import "./temp.css";
const Temp = () => {
  const [searchvalue, SetSearchValue] = useState("haldwani");
  const [tempInfo, setTempInfo] = useState("");
  const getInput = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=3715ead4348947721829be34ac5fef0b`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const [{ main }] = data.weather;
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const myWeather = {
        temp,
        humidity,
        pressure,
        name,
        country,
        sunset,
        main,
        speed,
      };
      setTempInfo(myWeather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInput();
  }, []);

  return (
    <>
      <div className=" container">
        <h1>Weather App</h1>
        <div className="serach">
          <input
            type="search"
            placeholder="Enter city name..."
            autoFocus
            className="search-bar"
            value={searchvalue}
            onChange={(e) => SetSearchValue(e.target.value)}
          />
          <button className="btn" onClick={getInput}>
            search
          </button>
        </div>
      </div>

      {/* result box */}
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
