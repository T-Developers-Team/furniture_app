import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";

// -- Images
import livingImgUrl from "../../assets/living-room.jpg"
import buildingImgUrl from "../../assets/building.jpg"
import imgUser from "../../assets/user.png"

const testimonialDummyData = [
  {
    img: imgUser,
    name: "Diana Silver",
    title: "Director",
    company: "Philadelphia visits BAYADA Home Health Care",
    message:
      "I enjoyed working with your team from Adam down to the gentleman that installed our furniture.It’s been nothing but a great experience! All too often we only hear of the negative, so I thought that you may appreciate some positive!",
  },
  {
    img: imgUser,
    name: "Diana Silver",
    title: "Director",
    company: "Philadelphia visits BAYADA Home Health Care",
    message:
      "I enjoyed working with your team from Adam down to the gentleman that installed our furniture.It’s been nothing but a great experience! All too often we only hear of the negative, so I thought that you may appreciate some positive!",
  },
  {
    img: imgUser,
    name: "Diana Silver",
    title: "Director",
    company: "Philadelphia visits BAYADA Home Health Care",
    message:
      "I enjoyed working with your team from Adam down to the gentleman that installed our furniture.It’s been nothing but a great experience! All too often we only hear of the negative, so I thought that you may appreciate some positive!",
  },
];

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
    <div className="text-2xl font-semibold w-full">
      {/* Home liquidation */}
      <section>
        <h2 className="text-3xl text-center text-gray-600 py-6">
          Current Liquidations
        </h2>

        <div className="grid grid-cols-11 min-h-screen">
          <div className="col-span-4 bg-cover bg-right" style={{backgroundImage: `url(${buildingImgUrl})`}}>
            <div className="px-8 py-12">
              <h3 className="text-6xl text-gray-200 mb-8">90% OFF</h3>
              <p className="text-xl text-gray-200">Check out our current liquidations taking place throughout the country for up to 90% savings on available products. Hurry! Once these items sell out they are gone for good.</p>
            </div>
          </div>
          <div className="col-span-7 flex flex-wrap justify-around">
            {productsList.map((product, index) => (
              <CardComponent key={index} productData={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="w-full bg-cover bg-center" style={{backgroundImage: `url(${livingImgUrl})`}}>
        <div className="max-w-6xl mx-auto py-10">
          <p className="text-3xl text-gray-200 text-center">
            Testimonials
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
            {testimonialDummyData.map((testimonial, index) => (
              <TestimonialComponent key={index} testimonialData={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const TestimonialComponent = ({
  testimonialData: { img, name, title, company, message },
}) => (
  <div className="p-2">
    <figure className="w-full h-40 flex justify-center items-center">
      <img className="w-1/3 h-3/4" src={img}/>
    </figure>
    <h4 className="text-center text-gray-200 text-xl mb-2">{name}</h4>
    <p className="text-center text-gray-300 text-sm mx-8">
      {title}, {company}
    </p>
    <hr className="my-6 mx-auto w-20"/>
    <p className="text-center text-gray-200 text-sm mx-8">{message}</p>
  </div>
);

const CardComponent = ({ productData: { img, title, desc, type, price } }) => (
  <div className="w-72 rounded overflow-hidden shadow-lg mb-6">
    <figure className="w-full h-48">
      <img className="w-full h-full" src={img[0]} alt={`${title}`} />
    </figure>
    <div className="flex flex-col px-6 py-4">
      <div className="text-gray-600 font-bold text-base mb-2 truncate">
        {title}
      </div>
      <p className="h-16 text-gray-500 text-sm mb-2 scrollbar-default overflow-auto">
        {desc}
      </p>
      <p className="text-base font-bold">Price: ${price}</p>
    </div>
  </div>
);

export default HomeView;
