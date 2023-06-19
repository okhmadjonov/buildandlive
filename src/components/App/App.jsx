import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
