import React from 'react';
import ImageCarousel from './ImageCarousel';
import PricingTable from './PricingTable';
import WeatherWidget from './WeatherWidget';
import ServicesList from './ServicesList';
import Visualizador from './TrekkingInfo';
import TrekkingInfo from './TrekkingInfo';


function TrekkingLima() {
  return (
    <div>
      <ImageCarousel/>
      <TrekkingInfo />
      <ServicesList />
      <PricingTable />
      <Visualizador />
      <WeatherWidget />
    </div>
  );
}

export default TrekkingLima;