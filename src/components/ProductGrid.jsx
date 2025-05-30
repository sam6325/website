// src/components/ProductGrid.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 使用 useNavigate 來跳轉

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductGrid = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const navigate = useNavigate(); // 用來進行導航

  const products = [
    { id: 1, name: '香芹籽抗氧化精華', description: '適合日常護理', price: '$3,200', image: '/images/a.png' },
    { id: 2, name: '蘆薈保濕乳液', description: '溫和滋潤', price: '$2,000', image: '/images/b.png' },
    { id: 3, name: '香氛潔手露', description: '清新舒緩', price: '$850', image: '/images/c.png' },
    { id: 4, name: '香氛潔手露', description: '清新舒緩', price: '$850', image: '/images/c.png' },
    { id: 5, name: '香氛潔手露', description: '清新舒緩', price: '$850', image: '/images/c.png' },
    { id: 6, name: '香氛潔手露', description: '清新舒緩', price: '$850', image: '/images/c.png' },
  ];

  // 點擊產品時跳轉至產品詳情頁面
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);  // 使用 navigate 進行頁面跳轉
  };

  return (
    <section className="product-grid">
      <h2 className="text-center text-2xl font-bold mb-6">推薦產品</h2>
      <div className="swiper-hover-wrapper">
        <Swiper
          modules={[Pagination, Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="w-11/12 mx-auto"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card" onClick={() => handleProductClick(product.id)}>
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* 自定義箭頭：根據狀態加上 hidden class */}
          <div className={`swiper-button-prev custom-prev ${isBeginning ? 'hidden' : ''}`}></div>
          <div className={`swiper-button-next custom-next ${isEnd ? 'hidden' : ''}`}></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductGrid;
