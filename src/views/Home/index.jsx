import React, {useEffect, useState} from 'react'
import { API_URL } from "../../utils/constants";

const HomeView = () => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const PRODUCT_URL = `${API_URL}/furnitures`

      const PRODUCTS_REQUEST_PARAMS = {
        metho: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
        },
      };

      const response = await fetch(PRODUCT_URL, PRODUCTS_REQUEST_PARAMS)
      const productsData = await response.json()
      console.log("list of products", productsData)
      setProductList(productsData)
    }

    getProducts()
  }, []);

  return (
    <div className="text-2xl font-semibold w-full min-h-screen bg-blue-700">
      {/* Home liquidation */}
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-3 bg-red-500"></div>
        <div className="col-span-7 bg-green-300"></div>
      </div>
    </div>
  );
};

export default HomeView;
