// src/components/HeroSection.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/banner1.jpg',
    heading: '探索您的護膚儀式',
    text: '以植物科學為基礎，創造感官體驗。',
  },
  {
    image: '/images/banner2.jpg',
    heading: '純粹與自然的結合',
    text: '嚴選原料，成就極致呵護。',
  },
  {
    image: '/images/banner3.jpg',
    heading: '每一天的儀式感',
    text: '從清潔、滋養到保護，全面體驗。',
  },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-text">
                <h1>{slide.heading}</h1>
                <p>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
