import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imagen1 from '../images/nogo1.webp';
import imagen2 from '../images/nogo2.jpg';
import imagen3 from '../images/nogo3.jpeg';
import imagen4 from '../images/nogo4.jpg';


function ImageCarousel() {
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
          <div className="caption">Cordillera Blanca - Huaraz</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen2} alt="Laguna 69" />
          <div className="caption">Laguna 69 - Huaraz</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen3} alt="Nevado Pisco" />
          <div className="caption">Nevado Pisco</div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagen4} alt="Parque Nacional Huascarán" />
          <div className="caption">Parque Nacional Huascarán</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ImageCarousel;
