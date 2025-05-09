import React from 'react';

const ProductGrid = () => {
  const products = [
    { id: 1, name: '香芹籽抗氧化精華', description: '適合日常護理', price: '$3,200' },
    { id: 2, name: '蘆薈保濕乳液', description: '溫和滋潤', price: '$2,000' },
    { id: 3, name: '香氛潔手露', description: '清新舒緩', price: '$850' },
  ];

  return (
    <section className="product-grid">
      <h2>推薦產品</h2>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
