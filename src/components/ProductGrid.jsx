import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: '香芹籽抗氧化精華',
      description: '適合日常護理',
      price: '$3,200',
      image: '/images/a.png',
    },
    {
      id: 2,
      name: '蘆薈保濕乳液',
      description: '溫和滋潤',
      price: '$2,000',
      image: '/images/b.png',
    },
    {
      id: 3,
      name: '香氛潔手露',
      description: '清新舒緩',
      price: '$850',
      image: '/images/c.png',
    },
    {
      id: 4,
      name: '香氛潔手露',
      description: '清新舒緩',
      price: '$850',
      image: '/images/c.png',
    },
    {
      id: 5,
      name: '香氛潔手露',
      description: '清新舒緩',
      price: '$850',
      image: '/images/c.png',
    },
    {
      id: 6,
      name: '香氛潔手露',
      description: '清新舒緩',
      price: '$850',
      image: '/images/c.png',
    },
  ];

  return (
    <section className="product-grid">
      <h2 className="text-center text-2xl font-bold mb-6">推薦產品</h2>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-11/12 mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductGrid;
