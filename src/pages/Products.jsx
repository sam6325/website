// src/pages/Products.jsx
import React from 'react';
import ProductGrid from '../components/ProductGrid';  // 引入 ProductGrid 組件

const Products = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-6">所有產品</h2>
      <ProductGrid />  {/* 在 Products 頁面中顯示產品列表 */}
    </section>
  );
};

export default Products;
