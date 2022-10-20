import React from "react";
import { HourForecastDayType } from "../../../Types/types";
import style from "./WeatherDay.module.css";

type PropsType = {
  infoDay: HourForecastDayType[];
  tempType: boolean;
};

export const WeatherDay: React.FC<PropsType> = React.memo((props) => {
  return (
    <div className={style.weatherDay}>
      {props.infoDay.map((d) => (
        <HourWeather key={d.time} hourInfo={d} tempType={props.tempType} />
      ))}
    </div>
  );
});

type HourWeatherPropsType = {
  hourInfo: HourForecastDayType;
  tempType: boolean;
};

const HourWeather: React.FC<HourWeatherPropsType> = React.memo((props) => {
  return (
    <div className={style.hourDayInfo}>
      <div className={style.hourTime}>{props.hourInfo.time}</div>
      <div className={style.hourIcon}>
        <img src={props.hourInfo.condition.icon} />{" "}
        {props.hourInfo.condition.text}
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Temperature:</div>
        <div className={style.hourText}>
          {props.tempType
            ? props.hourInfo.temp_c + " " + "°C"
            : props.hourInfo.temp_f + " " + "°F"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Feelslike:</div>
        <div className={style.hourText}>
          {props.tempType
            ? props.hourInfo.feelslike_c + " " + "°C"
            : props.hourInfo.feelslike_f + " " + "°F"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Humidity:</div>
        <div className={style.hourText}>
          {props.hourInfo.humidity + " " + "%"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Precipitation:</div>
        <div className={style.hourText}>
          {props.hourInfo.precip_mm + " " + "mm"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Chance of rain:</div>
        <div className={style.hourText}>
          {props.hourInfo.chance_of_rain + " " + "%"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Chance of snow:</div>
        <div className={style.hourText}>
          {props.hourInfo.chance_of_snow + " " + "%"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Cloud cover:</div>
        <div className={style.hourText}>{props.hourInfo.cloud + " " + "%"}</div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Pressure:</div>
        <div className={style.hourText}>
          {props.hourInfo.pressure_mb + " " + "hPa"}
        </div>
      </div>
      <div className={style.hourItem}>
        <div className={style.hourTitle}>Wind speed:</div>
        <div className={style.hourText}>
          {props.hourInfo.wind_kph + " " + "km/h"}
        </div>
      </div>
    </div>
  );
});
