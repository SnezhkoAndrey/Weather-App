import React from "react";
import { HourForecastDayType } from "../../../types/types";
import style from "./WeatherDay.module.css";

type PropsType = {
  infoDay: HourForecastDayType[];
  tempType: boolean;
  theme: boolean;
};

export const WeatherDay: React.FC<PropsType> = React.memo((props) => {
  return (
    <div className={style.weatherDay}>
      {props.infoDay.map((d) => (
        <HourWeather
          key={d.time}
          hourInfo={d}
          tempType={props.tempType}
          theme={props.theme}
        />
      ))}
    </div>
  );
});

type HourWeatherPropsType = {
  hourInfo: HourForecastDayType;
  tempType: boolean;
  theme: boolean;
};

const HourWeather: React.FC<HourWeatherPropsType> = React.memo((props) => {
  return (
    <div
      className={
        props.theme ? `${style.hourDayInfo} ${style.light}` : style.hourDayInfo
      }
    >
      <div
        className={
          props.theme ? `${style.hourTime} ${style.light}` : style.hourTime
        }
      >
        {props.hourInfo.time}
      </div>
      <div
        className={
          props.theme ? `${style.hourIcon} ${style.light}` : style.hourIcon
        }
      >
        <img src={props.hourInfo.condition.icon} />{" "}
        {props.hourInfo.condition.text}
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Temperature:
        </div>
        <div className={style.hourText}>
          {props.tempType
            ? props.hourInfo.temp_c + " " + "°C"
            : props.hourInfo.temp_f + " " + "°F"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Feelslike:
        </div>
        <div className={style.hourText}>
          {props.tempType
            ? props.hourInfo.feelslike_c + " " + "°C"
            : props.hourInfo.feelslike_f + " " + "°F"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Humidity:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.humidity + " " + "%"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Precipitation:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.precip_mm + " " + "mm"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Chance of rain:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.chance_of_rain + " " + "%"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Chance of snow:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.chance_of_snow + " " + "%"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Cloud cover:
        </div>
        <div className={style.hourText}>{props.hourInfo.cloud + " " + "%"}</div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Pressure:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.pressure_mb + " " + "hPa"}
        </div>
      </div>
      <div
        className={
          props.theme ? `${style.hourItem} ${style.light}` : style.hourItem
        }
      >
        <div
          className={
            props.theme ? `${style.hourTitle} ${style.light}` : style.hourTitle
          }
        >
          Wind speed:
        </div>
        <div className={style.hourText}>
          {props.hourInfo.wind_kph + " " + "km/h"}
        </div>
      </div>
    </div>
  );
});
