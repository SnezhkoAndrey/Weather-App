import { Switch } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import useTheme from "../../hooks/useLightTheme";
import { changeTheme } from "../../redux/GeneralReducer";
import style from "./Header.module.css";

type PropsType = {};

const ChangerTheme: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const changeThemeItem = (theme: boolean) => {
    dispatch(changeTheme(theme) as unknown as AnyAction);
  };

  const onChange = (checked: boolean) => {
    changeThemeItem(checked);
  };

  const { addTheme } = useTheme(style.light);
  return (
    <div className={style.changerTheme}>
      <div className={style.themeTitle}>Change theme</div>
      <Switch className={addTheme(style.switch)} onChange={onChange} />
    </div>
  );
};

export default ChangerTheme;
