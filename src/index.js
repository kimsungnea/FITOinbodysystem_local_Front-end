import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Main from "./Component/Main"; // 메인 화면 컴포넌트
import RecordBody from "./Component/RecordBody";
import Graph from "./Component/Graph";
import Foodlist from "./Component/FoodList";
import FoodDetail from "./Component/FoodDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/recodbody" element={<RecordBody />} />
        <Route path="/Graph" element={<Graph />} />
        <Route path="/FoodList" element={<Foodlist />} />
        <Route path="/FoodDetail" element={<FoodDetail/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
