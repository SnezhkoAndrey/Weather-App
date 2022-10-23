import React from "react";
import { ForecastDayType } from "../../types/types";
import style from "./ForecastDay.module.css";

type PropsType = {
  forecastDay: ForecastDayType;
  onSelect: any;
  tempType: boolean;
  active: boolean;
  theme: boolean;
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
      <div
        className={
          props.theme
            ? `${style.forecastDayItem} ${style.light}`
            : style.forecastDayItem
        }
      >
        <div
          className={
            props.theme
              ? `${style.forecastDate} ${style.light}`
              : style.forecastDate
          }
        >
          {props.forecastDay.date}
        </div>
        <div
          className={
            props.theme
              ? `${style.forecastMaxTemp} ${style.forecastItem} ${style.light}`
              : `${style.forecastMaxTemp} ${style.forecastItem}`
          }
        >
          <div
            className={
              props.theme
                ? `${style.forecastTitle} ${style.light}`
                : style.forecastTitle
            }
          >
            Max:
          </div>
          <div className={style.forecastText}>
            {props.tempType
              ? props.forecastDay.day.maxtemp_c + " " + "°C"
              : props.forecastDay.day.maxtemp_f + " " + "°F"}
          </div>
        </div>
        <div
          className={
            props.theme
              ? `${style.forecastMinTemp} ${style.forecastItem} ${style.light}`
              : `${style.forecastMinTemp} ${style.forecastItem}`
          }
        >
          <div
            className={
              props.theme
                ? `${style.forecastTitle} ${style.light}`
                : style.forecastTitle
            }
          >
            Min:
          </div>
          <div className={style.forecastText}>
            {props.tempType
              ? props.forecastDay.day.mintemp_c + " " + "°C"
              : props.forecastDay.day.mintemp_f + " " + "°F"}
          </div>
        </div>
        <div
          className={
            props.theme
              ? `${style.chanceOfRain} ${style.forecastItem} ${style.light}`
              : `${style.chanceOfRain} ${style.forecastItem}`
          }
        >
          <div
            className={
              props.theme
                ? `${style.forecastTitle} ${style.light}`
                : style.forecastTitle
            }
          >
            Chance of rain:{" "}
          </div>
          <div className={style.forecastText}>
            {props.forecastDay.day.daily_chance_of_rain + " " + "%"}
          </div>
        </div>
        <div
          className={
            props.theme
              ? `${style.sunrise} ${style.forecastItem} ${style.light}`
              : `${style.sunrise} ${style.forecastItem}`
          }
        >
          <div
            className={
              props.theme
                ? `${style.forecastTitle} ${style.light}`
                : style.forecastTitle
            }
          >
            Sunrise:{" "}
          </div>
          <div className={style.forecastText}>
            {props.forecastDay.astro.sunrise}
          </div>
        </div>
        <div
          className={
            props.theme
              ? `${style.sunset} ${style.forecastItem} ${style.light}`
              : `${style.sunset} ${style.forecastItem}`
          }
        >
          <div
            className={
              props.theme
                ? `${style.forecastTitle} ${style.light}`
                : style.forecastTitle
            }
          >
            Sunset:{" "}
          </div>
          <div className={style.forecastText}>
            {props.forecastDay.astro.sunset}
          </div>
        </div>
        <div
          className={
            props.theme
              ? `${style.buttonDetails} ${style.light}`
              : style.buttonDetails
          }
        >
          <button onClick={goToOnSelected}>Details</button>
        </div>
      </div>
    </div>
  );
});
