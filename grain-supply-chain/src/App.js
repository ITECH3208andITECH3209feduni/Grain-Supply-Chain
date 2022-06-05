import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from './components/home/Home'
import Farm from './components/farm/Farm';
import Storage from "./components/storage/Storage";
import Transport from './components/transport/Transport';
import Export from "./components/export/Export";
import Contact from "./components/contact/Contact";
import Harvest from "./components/harvest/Harvest";
import Login from "./components/login/Login";
import GenerateReport from "./components/report/GenerateReport";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [loginModalState, updateLoginModalState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function onLoginModalStateChanged(loginModalState) {
    updateLoginModalState(loginModalState)
  }

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar loginModalState={loginModalState} onLoginModalStateChanged={onLoginModalStateChanged} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/export" element={<Export />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/harvest" element={<Harvest />} />
          <Route path="/generate-report" element={<GenerateReport />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Login loginModalState={loginModalState} onLoginModalStateChanged={onLoginModalStateChanged} />
        <Footer />
      </div></>
  );
}

export default App;
