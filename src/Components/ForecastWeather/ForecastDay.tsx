import React from "react";
import { ForecastDayType } from "../../Types/types";
import style from "./ForecastDay.module.css";

type PropsType = {
  forecastDay: ForecastDayType;
  onSelect: any;
  tempType: boolean;
  active: boolean;
};

export const ForecastDay: React.FC<PropsType> = React.memo((props) => {
  const goToOnSelected = () => {
    props.onSelect();
  };

  return (
    <div
      className={
        props.active
          ? `${style.forecastDay} ${style.active}`
          : style.forecastDay
      }
    >
      <div className={style.forecastDate}>{props.forecastDay.date}</div>
      <div className={`${style.forecastMaxTemp} ${style.forecastItem}`}>
        <div className={style.forecastTitle}>Max:</div>
        <div className={style.forecastText}>
          {props.tempType
            ? props.forecastDay.day.maxtemp_c + " " + "°C"
            : props.forecastDay.day.maxtemp_f + " " + "°F"}
        </div>
      </div>
      <div className={`${style.forecastMinTemp} ${style.forecastItem}`}>
        <div className={style.forecastTitle}>Min:</div>
        <div className={style.forecastText}>
          {props.tempType
            ? props.forecastDay.day.mintemp_c + " " + "°C"
            : props.forecastDay.day.mintemp_f + " " + "°F"}
        </div>
      </div>
      <div className={`${style.chanceOfRain} ${style.forecastItem}`}>
        <div className={style.forecastTitle}>Chance of rain: </div>
        <div className={style.forecastText}>
          {props.forecastDay.day.daily_chance_of_rain + " " + "%"}
        </div>
      </div>
      <div className={`${style.sunrise} ${style.forecastItem}`}>
        <div className={style.forecastTitle}>Sunrise: </div>
        <div className={style.forecastText}>
          {props.forecastDay.astro.sunrise}
        </div>
      </div>
      <div className={`${style.sunset} ${style.forecastItem}`}>
        <div className={style.forecastTitle}>Sunset: </div>
        <div className={style.forecastText}>
          {props.forecastDay.astro.sunset}
        </div>
      </div>
      <div className={style.buttonDetails}>
        <button onClick={goToOnSelected}>Details</button>
      </div>
    </div>
  );
});
