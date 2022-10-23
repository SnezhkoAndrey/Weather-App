import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";
import { AppStateType } from "./redux/NewStore";

const App = React.memo(() => {
  const theme = useSelector((state: AppStateType) => state.general.theme);

  return (
    <div className={theme ? "app light" : "app"}>
      <div className={theme ? "app-wrapper light" : "app-wrapper"}>
        <Header />
        <div className={theme ? "infoWeather light" : "infoWeather"}>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
});

export default App;
