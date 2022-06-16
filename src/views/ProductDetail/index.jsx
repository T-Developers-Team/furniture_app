import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import { Carousel } from "flowbite-react";
import { AiFillStar, AiOutlineStar, AiTwotoneShop} from "react-icons/ai"
import { Card } from "../../components";

const ProductDetailView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ img: [] });
  const [productsRelated, setProductsRelated] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      const PRODUCT_URL = `${API_URL}/furnitures/find/${id}`;

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
      const productData = await response.json();
      console.log("product", productData);
      getProductsRelated(productData.type)
      setProduct(productData);
    };

    const getProductsRelated = async (type) => {
      const PRODUCT_URL = `${API_URL}/furnitures?type=${type}`;

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
      for (let i = 0; i < productsData.length; i++) {
        if (productsData[i]._id === id) {
          productsData.splice(i,1)
        };
      }
      console.log("productsRelated", productsData);
      setProductsRelated(productsData);
    }
    getProduct();
  }, [id]);

  return (
    <div className="max-w-8xl mx-auto">
      <section className="lg:min-h-[600px] grid grid-cols-10 ">
        <div className="col-span-10 lg:col-span-6 px-4 lg:px-0">
          <div className="w-full h-80 lg:h-full lg:w-3/4 mx-auto flex">
            <Carousel slide={false} style={{height: '70%', margin: 'auto'}}>
              {product.img.map((image, index) => <img key={index} src={image}/>)}
            </Carousel>
          </div>
        </div>

        <div className="col-span-10 lg:col-span-4 p-10">
          <div className="text-gray-400 tracking-wider uppercase">{product.type}</div>
          <div className="text-2xl font-semibold pb-4">{product.title}</div>
          <div className="flex pb-4 text-orange-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="pb-4">
            {product.desc}
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            posuere malesuada rutrum. Aliquam sit amet ante a neque euismod
            pretium a et mi. Praesent in nibh augue. Cras in vestibulum enim.
            Aliquam erat volutpat. Maecenas id lobortis dolor.
          </div>
          <div className="flex gap-4 flex-row pb-4 text-xl items-center font-semibold">
            <div className="flex grow items-center italic">
              <p className="pr-1">$</p>
              <span className="text-3xl text-blue-600">
                {product.price}
              </span>
            </div>
            {product.discount != "0" &&
              <div className="text-white bg-blue-500 text-base px-6 py-1 rounded-bl-md rounded-tr-md">
                {product.discount}% Off? Contact Us
              </div>
            }
          </div>
          <div className="">
            <button className="flex bg-orange-500 rounded px-6 py-2 border-white font-semibold items-center hover:bg-white border hover:border-orange-500 hover:text-orange-500">
              <AiTwotoneShop className="h-6 w-6"/>
              <p className="italic pl-3">Buy Furniture</p>
            </button>
          </div>
        </div>
      </section>

      {productsRelated.length > 0 &&
        <section className="max-w-7xl px-16 mx-auto my-4">
          <h2 className="text-3xl text-center py-4">
            Furnitures Related
          </h2>
            <div className="flex flex-wrap justify-around gap-4">
              {productsRelated.slice(0, 4).map((product, index) => (
                <Link key={index} to={`/product/${product._id}`}>
                  <Card productData={product} />
                </Link>
              ))}
            </div>
        </section>
      }
    </div>
  );
};

export default ProductDetailView;
