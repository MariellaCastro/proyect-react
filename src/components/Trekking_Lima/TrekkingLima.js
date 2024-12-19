import React from 'react';
import Caorusellima from './Carouselima';
import TablaPrecio from './TablaPrecio';
import Temperatura from './Temperatura';
import Servicios from './Servicios';
import Visualizador from './Visualizador';
import Info from './Info';


function TrekkingLima() {
  return (
    <div>
      <Caorusellima />
      <Info />
      <Servicios />
      <TablaPrecio />
      <Visualizador />
      <Temperatura />
    </div>
  );
}

export default TrekkingLima;