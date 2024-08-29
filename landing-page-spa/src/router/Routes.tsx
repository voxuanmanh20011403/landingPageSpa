import Contact from "../pages/contact/Contact";
import Homepage from "../pages/home/Index";
import PriceList from "../pages/price-list/PriceList";
import Services from "../pages/Services/Services";
import SpaceRoom from "../pages/space-room/SpaceRoom";

const routes = [
  {
    name: "Home",
    key: "Home",
    route: "/",
    component: <Homepage />,
    isDynamic: true,
  },
  {
    name: "Services",
    key: "Services",
    route: "/services",
    component: <Services />,
    isDynamic: true,
  },
  {
    name: "Price",
    key: "Price",
    route: "/price-list",
    component: <PriceList />,
    isDynamic: true,
  },

  {
    name: "contact",
    key: "contact",
    route: "/contact",
    component: <Contact />,
    isDynamic: true,
  },
];

export default routes;
