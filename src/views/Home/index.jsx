import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";

const HomeView = () => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const PRODUCT_URL = `${API_URL}/furnitures`;

      const PRODUCTS_REQUEST_PARAMS = {
        metho: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
        },
      };
      const response = await fetch(PRODUCT_URL, PRODUCTS_REQUEST_PARAMS);
      const productsData = await response.json();
      console.log("list of products", productsData);
      setProductList(productsData);
    };
    getProducts();
  }, []);

  return (
    <div className="text-2xl font-semibold w-full min-h-screen">
      {/* Home liquidation */}
      <div className="grid grid-cols-10 min-h-screen">
        <div className="col-span-3 bg-red-500"></div>
        <div className="col-span-7 flex flex-wrap justify-around items-center">
          {productsList.map((product) => (
            <CardComponent productData={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardComponent = ({ productData: { img, title, desc, type, price } }) => (
  <div className="w-72 rounded overflow-hidden shadow-lg my-6">
    <figure className="w-full h-48">
      <img className="w-full h-full" src={img[0]} alt={`${title}`}/>
    </figure>
    <div className="flex flex-col px-6 py-4">
      <div className="text-gray-600 font-bold text-base mb-2 truncate">{title}</div>
      <p className="h-16 text-gray-500 text-sm mb-2 scrollbar-default overflow-auto">{desc}</p>
      <p className="text-base font-bold">Price: ${price}</p>
    </div>
  </div>
);

export default HomeView;
