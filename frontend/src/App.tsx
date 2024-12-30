// src/App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import AdBanner from "./components/AdBanner";
import PopupAd from "./components/PopupAd";
import TopAd from "./components/TopAd";

const App: React.FC = () => {
  return (
    <>
      {/* Ad at the top before the navbar */}
      <TopAd />

      {/* Popup Ads */}
      <PopupAd
        position="bottomRight"
        initialDelay={10000}
        reopenDelay={30000}
      />
      <PopupAd position="topRight" initialDelay={10000} reopenDelay={60000} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
