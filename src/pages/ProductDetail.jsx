// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // 從 URL 獲取產品 ID
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 模擬取得產品資料
    const fetchProduct = async () => {
      const productData = {
        id: id,
        name: '香芹籽抗氧化精華',
        description: '適合日常護理，提亮膚色。',
        price: '$3,200',
        image: '/images/a.png',
        details: '這款精華含有強效的抗氧化成分，能夠有效保護肌膚免受環境污染與氧化傷害。',
        usage: '早晚潔面後使用，取適量均勻塗抹於臉部，輕柔按摩至吸收。',
        ingredients: '香芹籽提取物、維生素C、維生素E、植物精華',
      };
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>載入中...</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <img src={product.image} alt={product.name} className="product-detail-image" />
      </div>

      <div className="product-detail-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>

      <div className="product-detail-content">
        <h2>產品詳細介紹</h2>
        <p>{product.details}</p>

        <h3>使用方式</h3>
        <p>{product.usage}</p>

        <h3>主要成分</h3>
        <p>{product.ingredients}</p>
      </div>

      {/* 相關產品區塊 (可選) */}
      <div className="related-products">
        <h3>相關產品</h3>
        <div className="related-products-list">
          {/* 可在這裡展示其他產品 */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
