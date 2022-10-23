import { Switch } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { changeTheme } from "../../redux/GeneralReducer";
import style from "./Header.module.css";

type PropsType = {
  theme: boolean;
};

const ChangerTheme: React.FC<PropsType> = (props) => {
  let dispatch = useDispatch();
  const changeThemeItem = (theme: boolean) => {
    dispatch(changeTheme(theme) as unknown as AnyAction);
  };

  const onChange = (checked: boolean) => {
    changeThemeItem(checked);
  };
  return (
    <div className={style.changerTheme}>
      <div className={style.themeTitle}>Change theme</div>
      <Switch
        className={
          props.theme ? `${style.switch} ${style.light}` : style.switch
        }
        onChange={onChange}
      />
    </div>
  );
};

export default ChangerTheme;
