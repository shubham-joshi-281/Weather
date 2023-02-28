import React, { useEffect, useState } from "react";

const Weathercard = ({ tempInfo }) => {
  const [weatherState, settWeatherState] = useState("");
  const { temp, humidity, pressure, name, country, sunset, main, speed } =
    tempInfo;
  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          settWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          settWeatherState("wi-fog");
          break;
        case "Clear":
          settWeatherState("wi-day-sunny");
          break;
        case "Mist":
          settWeatherState("wi-day-cloudy-windy");
          break;
        case "Snow":
          settWeatherState("wi-snow");
          break;
        case "Smoke":
          settWeatherState("wi-smoke");
          break;
        default:
          settWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [main]);

  //   convert sec to hr
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="container-box">
        <div className="box">
          <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className="info">
            <div className="temp">
              <span>{temp}&deg;C</span>
            </div>
            <div className="temp-des">
              <span>{main}</span>
              <div className="place">
                <span>
                  {name} , {country}
                </span>
              </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
          </div>
        </div>
        <div className="extra-info-box">
          <div className="extra-info">
            <div className="box1">
              <div className="icon">
                <i className={"wi wi-sunset"}></i>
              </div>
              <div className="para">
                <span>{timestr} pm</span>
                <span>sunset</span>
              </div>
            </div>

            <div className="box1">
              <div className="icon">
                <i className={"wi wi-humidity"}></i>
              </div>
              <div className="para">
                <span>{humidity}</span>
                <span>Humidity</span>
              </div>
            </div>

            <div className="box1">
              <div className="icon">
                <i className={"wi wi-rain"}></i>
              </div>
              <div className="para">
                <span>{pressure}</span>
                <span>Pressure</span>
              </div>
            </div>
            <div className="box1">
              <div className="icon">
                <i className={"wi wi-strong-wind"}></i>
              </div>
              <div className="para">
                <span>{speed}</span>
                <span>Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
