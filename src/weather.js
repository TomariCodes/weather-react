import React from "react";
import "./weather.css";

function Weather() {
  return (
    <div className="Weather">
      <div className="header">
        <h2>React Weather</h2>
        <form className="search-form" id="search-form">
          <input
            type="text"
            id="search-input"
            placeholder="Enter city name"
            autoComplete="off"
            required
            className="search-input"
          />
          <input
            type="submit"
            className="search-button"
            value="Search"
            id="search-button"
          />
        </form>
      </div>
      <div className="weather-info">
        <div className="weather-details">
          <h1 id="current-city" className="city">
            Lisbon
          </h1>
          <p>
            <span id="current-date">Tuesday 14:49</span>,
            <span id="current-description"> scattered clouds</span>
            <br />
            Humidity:{" "}
            <strong>
              <span id="current-humidity">66</span>%
            </strong>
            , Wind:{" "}
            <strong>
              <span id="current-wind">3.13</span>km/h
            </strong>
          </p>
        </div>
        <div className="temperature-container">
          <div className="current-temp-img" id="current-temp-img">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="Rain Day"
            />
          </div>
          <div className="current-temperature" id="current-temperature">
            12
          </div>
          <div className="current-temperature-unit">&deg;F | &deg;C</div>
        </div>
      </div>

      <div className="weather-forecast">
        <div className="forecast-day">
          <div className="forecast-date">Sun</div>
          <div>
            <img
              className="forecast-day-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="scattered clouds"
            />
          </div>
          <div className="forecast-temperatures">
            <div className="forecast-temp max">25&deg;</div>
            <div className="forecast-temp min">14&deg;</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="forecast-date">Mon</div>
          <div>
            <img
              className="forecast-day-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="scattered clouds"
            />
          </div>
          <div className="forecast-temperatures">
            <div className="forecast-temp max">24&deg;</div>
            <div className="forecast-temp min">15&deg;</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="forecast-date">Tue</div>
          <div>
            <img
              className="forecast-day-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="few clouds"
            />
          </div>
          <div className="forecast-temperatures">
            <div className="forecast-temp max">22&deg;</div>
            <div className="forecast-temp min">12&deg;</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="forecast-date">Wed</div>
          <div>
            <img
              className="forecast-day-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="rainy day"
            />
          </div>
          <div className="forecast-temperatures">
            <div className="forecast-temp max">18&deg;</div>
            <div className="forecast-temp min">14&deg;</div>
          </div>
        </div>
        <div className="forecast-day">
          <div className="forecast-date">Thu</div>
          <div>
            <img
              className="forecast-day-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="clear sky"
            />
          </div>
          <div className="forecast-temperatures">
            <div className="forecast-temp max">28&deg;</div>
            <div className="forecast-temp min">16&deg;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
