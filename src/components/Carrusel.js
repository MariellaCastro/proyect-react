import React, { useState, useEffect } from "react";
import Header from "./Header";

export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    "/img/home/carrusel/bus.jpg",
    "/img/home/carrusel/1.jpg",
    "/img/home/carrusel/2.jpg",
    "/img/home/carrusel/3.jpg",
    "/img/home/carrusel/huaraz.jpg",
  ];

  function showSlide(index) {
    if (index >= items.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(index);
    }
  }

  function siguiente() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      siguiente();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-content">
          <h1>LA MEJOR AGENCIA EN</h1>
          <h2>HUARAZ, ÁNCASH</h2>
          <p>
            Contamos con tours por los destinos más emblemáticos en la Sierra de
            Huaraz además de los mejores lugares turísticos de Perú.
          </p>
          <button className="cta-button">Explora nuestros tours</button>
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          &#9664;
        </button>
        <button className="carousel-control-next" onClick={siguiente}>
          &#9654;
        </button>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => showSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carrusel;