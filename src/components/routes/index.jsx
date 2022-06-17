import { useRoutes } from "react-router-dom";
import HomeView from "../../views/Home";
import ProductDetailView from "../../views/ProductDetail";
import { LayoutView } from "../../views/Layout";
import AboutUsView from "../../views/AboutUs";

const RoutesComponent = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutView />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailView />
        },
        {
          path: "/about",
          element: <AboutUsView />,
        },
      ],
    },
  ]);

  return element;
};

export default RoutesComponent;
