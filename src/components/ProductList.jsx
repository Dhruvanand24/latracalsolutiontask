import React from 'react';
import Products from './Products';
import menuItems from './menuItems';

const ProductList = () => {
  const list = menuItems;

  return (
    <div className="relative">
      <div className="pt-16">
        <div className="flex justify-center items-center m-8 flex-col">
          <h2 className="mb-4 text-2xl font-bold">Products</h2>
          {list.map((item, index) => (
            <Products
              key={index}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
