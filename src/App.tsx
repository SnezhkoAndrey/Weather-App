import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { ForecastWeather } from "./Components/ForecastWeather/ForecastWeather";
import { CurrentWeather } from "./Components/CurrentWeather/CurrentWeather";
import { Navigate, Route, Routes } from "react-router-dom";

const App = React.memo(() => {
  return (
    <div className="app-wrapper">
      <div>
        <Header />
      </div>
      <div className="infoWeather">
        <Routes>
          <Route path="/" element={<Navigate to={"/current"} />} />
          <Route path="/forecast" element={<ForecastWeather />} />
          <Route path="/current" element={<CurrentWeather />} />
        </Routes>
      </div>
    </div>
  );
});

export default App;
