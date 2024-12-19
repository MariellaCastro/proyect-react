import React from 'react';
import ImageCarousel from '../ImageCarousel';
import TrekkingInfo from '../TrekkingInfo';
import ServicesList from '../ServicesList';
import PricingTable from '../PricingTable';
import ImageViewer from '../ImageViewer';
import WeatherWidget from '../WeatherWidget';

function TrekkingHuaraz() {
  return (
    <div>
      <ImageCarousel />
      <TrekkingInfo />
      <ServicesList />
      <PricingTable />
      <ImageViewer />
      <WeatherWidget />
    </div>
  );
}

export default TrekkingHuaraz;