import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TrekkingLima from "./components/Trekking_Lima/TrekkingLima";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import TrekkingInfo from "./components/TrekkingInfo";
import ServicesList from "./components/ServicesList";
import PricingTable from "./components/PricingTable";
import WeatherWidget from "./components/WeatherWidget";
import ImageViewer from "./components/ImageViewer";
import Home from "./components/Pages/Home";
import Reservas from "./components/Pages/Reservas";
import QuienesSomos  from "./components/Pages/QuienesSomos";
import Hotel from "./components/Pages/Hotel";
import Trekkinghuaraz from "./components/Trekkinghuaraz"
import "./styles.css";



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {}
          <Route
            path="/"
            element={
              <Home>
                <>
                <div>
                  <ImageCarousel />
                  <TrekkingInfo />
                  <ServicesList />
                  <PricingTable />
                  <ImageViewer />
                  <WeatherWidget />
                </div>
                </>
              </Home>
            }
          />
          {}
          <Route path="/Inicio" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/trekking-huaraz" element={<Trekkinghuaraz/>} />
          <Route path="/trekking-lima" element={<TrekkingLima />} />
          <Route path="/hoteles" element={<Hotel />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
