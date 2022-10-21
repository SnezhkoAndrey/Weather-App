import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import {
  updateCityNameAC,
  updateCityNameWithCoordinates,
  updateTempTypeAC,
} from "../../Redux/GeneralReducer";
import style from "./Header.module.css";
import logo from "../../Assets/logo.png";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/NewStore";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import useGeolocation from "react-hook-geolocation";
import { UpdateCityNameForm } from "./UpdateCityNameForm";
import { NavLink } from "react-router-dom";

export const Header = React.memo(() => {
  const errorMessage = useSelector(
    (state: AppStateType) => state.general.error?.message
  );

  let dispatch = useDispatch();
  const updateCityName = (cityName: string) => {
    dispatch(updateCityNameAC(cityName) as unknown as AnyAction);
  };
  const updateCityNameCoordinates = (cityName: number[]) => {
    dispatch(updateCityNameWithCoordinates(cityName) as unknown as AnyAction);
  };
  const updateTempType = (tempSelect: boolean) => {
    dispatch(updateTempTypeAC(tempSelect) as unknown as AnyAction);
  };

  const geolocation = useGeolocation();
  const geolocationCoordinates = [geolocation.latitude, geolocation.longitude];

  useEffect(() => {
    if (!!geolocationCoordinates[0]) {
      updateCityNameCoordinates(geolocationCoordinates);
    }
  }, [geolocationCoordinates]);

  useEffect(() => {
    if (!!errorMessage) {
      toast.error(errorMessage, {
        style: {
          background: "#333",
          color: "#fff",
          boxShadow: "0.1px 0.1px 3px 1px red",
        },
      });
    }
  }, [errorMessage]);

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div>
          <Toaster />
        </div>
        <NavLink className={style.logoNavlink} to={"/"}>
          <img className={style.logoImage} src={logo} />
          <h4>WeatherApp</h4>
        </NavLink>
      </div>
      <div className={style.updateForm}>
        <UpdateCityNameForm
          updateCityName={updateCityName}
          updateTempType={updateTempType}
        />
      </div>
    </div>
  );
});
