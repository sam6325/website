import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestSwiper = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><div style={{ background: '#eee', padding: 50 }}>Slide 1</div></SwiperSlide>
        <SwiperSlide><div style={{ background: '#ccc', padding: 50 }}>Slide 2</div></SwiperSlide>
        <SwiperSlide><div style={{ background: '#aaa', padding: 50 }}>Slide 3</div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSwiper;
