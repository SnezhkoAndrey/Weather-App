import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentWeatherInfo } from "../../Redux/NewCurrentReducer";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/NewStore";
import { NavLink } from "react-router-dom";
import style from "./CurrentWeather.module.css";
import { Preloader } from "../../common/Preloader";

export const CurrentWeather = React.memo(() => {
  const cityName = useSelector((state: AppStateType) => state.general.cityName);
  const tempType = useSelector(
    (state: AppStateType) => state.general.tempSelect
  );
  const currentWeather = useSelector(
    (state: AppStateType) => state.current.currentWeatherData
  );
  const isFetching = useSelector(
    (state: AppStateType) => state.general.isFetching
  );

  let dispatch = useDispatch();
  const getCurrentWeatherData = (cityName: string | number[]) => {
    dispatch(getCurrentWeatherInfo(cityName) as unknown as AnyAction);
  };

  useEffect(() => {
    getCurrentWeatherData(cityName);
  }, [cityName]);

  return (
    <div>
      {isFetching ? <Preloader /> : null}
      <div>
        <NavLink className={style.navlink} to={"/forecast"}>
          {"< 14-day forecast"}
        </NavLink>
      </div>
      <div className={style.info}>
        <div className={style.infoCity}>
          <div>
            <h2 className={style.locationName}>
              {currentWeather.location.name}
            </h2>
          </div>
          <div>{currentWeather.location.region}</div>
          <div>{currentWeather.location.country}</div>
          <div className={style.localTime}>
            Localtime: {currentWeather.location.localtime}
          </div>
        </div>
        <div className={style.infoIcon}>
          <div className={style.currentIconItem}>
            <img
              className={style.currentIcon}
              src={currentWeather.current.condition.icon}
            />
            <div className={style.currentIconText}>
              {currentWeather.current.condition.text}
            </div>
          </div>
          <div>
            <div className={`${style.currentTemp} ${style.infoWeatherItem}`}>
              <div className={style.titleName}>Temperature</div>
              <div className={style.infotext}>
                {tempType
                  ? currentWeather.current.temp_c + " " + "°C"
                  : currentWeather.current.temp_f + " " + "°F"}
              </div>
            </div>
            <div
              className={`${style.currentFilslike} ${style.infoWeatherItem}`}
            >
              <div className={style.titleName}>Feels like</div>
              <div className={style.infotext}>
                {tempType
                  ? currentWeather.current.feelslike_c + " " + "°C"
                  : currentWeather.current.feelslike_f + " " + "°F"}
              </div>
            </div>
          </div>
        </div>
        <div className={style.infoWeather}>
          <div className={`${style.currentCloud} + ${style.infoWeatherItem}`}>
            <div className={style.titleName}>Cloud cover</div>
            <div className={style.infotext}>
              {currentWeather.current.cloud + " " + "%"}
            </div>
          </div>
          <div
            className={`${style.currentPrecipitation} + ${style.infoWeatherItem}`}
          >
            <div className={style.titleName}>Precipitation</div>
            <div className={style.infotext}>
              {currentWeather.current.precip_mm + " " + "mm"}
            </div>
          </div>
          <div
            className={`${style.currentHumidity} + ${style.infoWeatherItem}`}
          >
            <div className={style.titleName}>Humidity</div>
            <div className={style.infotext}>
              {currentWeather.current.humidity + " " + "%"}
            </div>
          </div>
          <div className={`${style.currentWind} + ${style.infoWeatherItem}`}>
            <div className={style.titleName}>Wind speed</div>
            <div className={style.infotext}>
              {currentWeather.current.wind_kph + " " + "Km/h"}
            </div>
          </div>
          <div
            className={`${style.currentPressure} + ${style.infoWeatherItem}`}
          >
            <div className={style.titleName}>Pressure</div>
            <div className={style.infotext}>
              {currentWeather.current.pressure_mb + " " + "hPa"}
            </div>
          </div>
        </div>
      </div>
      <div className={style.lastUpdate}>
        Last update: {currentWeather.current.last_updated}
      </div>
    </div>
  );
});
