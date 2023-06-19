import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
