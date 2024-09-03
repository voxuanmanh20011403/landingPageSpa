import Aroma from "../../assets/images/services/aroma.jpg";
import Stone from "../../assets/images/services/stone.jpg";
import Bamboo from "../../assets/images/services/Bamboo.jpg";
import Kid from "../../assets/images/services/kid.png";
import Maternity from "../../assets/images/services/Maternity.webp";
import Foot from "../../assets/images/services/Foot.webp";
import Dry from "../../assets/images/services/dry.png";

export interface CardServiceProps {
  title?: string;
  urlImage?: string;
  rate60?: string;
  rate90?: string;
  rate120?: string;
  rate60plus?: string;
  rate90plus?: string;
  title2?: string;
}
export const ServicesList: CardServiceProps[] = [
  {
    title: "Aroma Massage",
    urlImage: Aroma,
    rate60: "60min : 600.000VNĐ ( 24$ )",
    rate90: "90min : 800.000VNĐ ( 32$ )",
    rate120: "120min : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Dry Massage",
    urlImage: Dry,
    rate60: "60 mins : 600.000VNĐ ( 24$ )",
    rate90: "90 mins : 800.000VNĐ ( 32$ )",
    rate120: "120 mins : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Stone Massage",
    urlImage: Stone,
    rate60: "60 mins : 600.000VNĐ ( 24$ )",
    rate90: "90 mins : 800.000VNĐ ( 32$ )",
    rate120: "120 mins : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Bamboo Massage",
    urlImage: Bamboo,
    rate60: "60 mins : 600.000VNĐ ( 24$ )",
    rate90: "90 mins : 800.000VNĐ ( 32$ )",
    rate120: "120 mins : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Kid Massage",
    urlImage: Kid,
    rate60: "60 mins : 600.000VNĐ ( 24$ )",
    rate90: "90 mins : 800.000VNĐ ( 32$ )",
    rate120: "120 mins : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Maternity Massage",
    urlImage: Maternity,
    rate60: "60 mins : 600.000VNĐ ( 24$ )",
    rate90: "90 mins : 800.000VNĐ ( 32$ )",
    rate120: "120 mins : 950.000VNĐ ( 38$ )",
  },
  {
    title: "Foot Massage",
    urlImage: Foot,
    rate60: "60 mins : 450.000VNĐ ( 18$ )",
    title2: "Total Foot Massge",
    rate60plus: "60 mins: 550.000VNĐ ( 22$ )",
    rate90plus: "90 mins : 700.000VNĐ ( 28$ )",
  },
];
