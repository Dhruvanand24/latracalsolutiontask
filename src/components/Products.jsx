import React, { useState } from "react";

const Products = (item) => {
 
 const[show,setShow] = useState(false);

 const handleclick = () => {
    setShow(!show);
 }


  return (
    <div className="card shadow-xl relative mr-5 md:my-5 w-1/3 mt-4 cursor-pointer" onClick={handleclick}>
      <figure>
        <img
          src={item.imageUrl}
          alt="Shoes"
          className="hover:scale-105 transition-all duration-300 object-cover aspect-video"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold mb-2">{item.name}!</h2>
        <h5 className="font-semibold text-red">
            <span className="text-sm">$</span> {item.price}
          </h5>
        {show?<p className="text-sm mb-2">{item.description}</p>:<></>}
        
         
       
      </div>
    </div>
  );
};

export default Products;
