import React, { useEffect, useState } from "react";
import { API_URL, TESTIMONIALS_DATA } from "../../utils/constants";
import { Link } from "react-router-dom";

// -- Images
import livingImgUrl from "../../assets/living-room.jpg";
import diningImgUrl from "../../assets/dining-room.jpg";
import buildingImgUrl from "../../assets/building.jpg";

import { Card, Testimonial } from "../../components";

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
    <div className="font-semibold w-full">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${diningImgUrl})` }}
      >
        <div className="py-52 text-center text-white">
          <p className="text-4xl pb-4">
            Certified Pre-Owned <br /> Office Furniture
          </p>
          <button className="bg-orange-500 rounded px-6 py-1 font-semibold hover:text-orange-600 hover:bg-white">
            SEE MORE
          </button>
        </div>
      </section>

      {/* Home liquidation */}
      <section>
        <h2 className="text-3xl text-center text-gray-600 py-6">
          Current Liquidations
        </h2>

        <div className="grid grid-cols-11 min-h-screen">
          <div
            className="col-span-11 lg:col-span-4 bg-cover bg-right"
            style={{ backgroundImage: `url(${buildingImgUrl})` }}
          >
            <div className="px-8 py-12">
              <h3 className="text-6xl text-gray-200 mb-8">90% OFF</h3>
              <p className="text-xl text-gray-200">
                Check out our current liquidations taking place throughout the
                country for up to 90% savings on available products. Hurry! Once
                these items sell out they are gone for good.
              </p>
            </div>
          </div>
          <div className="col-span-11 lg:col-span-7 flex flex-wrap justify-around py-6">
            {productsList.map((product, index) => (
              <Link key={index} to={`/product/${product._id}`}>
                <Card productData={product} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${livingImgUrl})` }}
      >
        <div className="max-w-6xl mx-auto py-10">
          <p className="text-3xl text-gray-200 text-center">Testimonials</p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <Testimonial key={index} testimonialData={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
