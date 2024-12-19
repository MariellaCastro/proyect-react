import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imagen1 from '../Trekking_Lima/img/Lim1.jpg';
import imagen2 from '../Trekking_Lima/img/Lim2.jpg';
import imagen3 from '../Trekking_Lima/img/Lim3.jpg';
import imagen4 from '../Trekking_Lima/img/Lim4.jpg';


function Caorusellima() {
  return (
    <section className="image-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagen1} alt="Cordillera Blanca Huaraz" />
          <div className="caption">Capita - Lima</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen2} alt="Laguna 69" />
          <div className="caption">Costa Verde - Chorrillos</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen3} alt="Nevado Pisco" />
          <div className="caption">Parque del amor - Barranco</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen4} alt="Parque Nacional Huascarán" />
          <div className="caption">Plaza de Armas - Centro de Lima</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Caorusellima;
