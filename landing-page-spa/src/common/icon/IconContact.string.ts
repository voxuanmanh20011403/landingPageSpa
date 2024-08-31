import fb from "../../assets/images/contact/fb.png";
import zalo from "../../assets/images/contact/zalo.png";
import whatsapp from "../../assets/images/contact/whatsapp.png";
import kakao from "../../assets/images/contact/kakao.png";
import map from "../../assets/images/contact/ggmap.png";

const ListIconItem = [
  {
    href: "https://zalo.me/0374811004",
    className: "Contact-icon",
    background: "#2196F3",
    src: zalo,
    alt: "Zalo",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61560997747076",
    className: "Contact-icon-fb",
    background: "#2196F3",
    src: fb,
    alt: "Facebook",
  },
  {
    href: "https://wa.me/0374811004",
    className: "Contact-icon-whatsapp",
    background: "#20d142",
    src: whatsapp,
    alt: "WhatsApp",
  },
  {
    href: "https://kakao.com",
    className: "Contact-icon-kakao",
    background: "#ffeb3b",
    src: kakao,
    alt: "Kakao",
  },
  {
    href: "https://www.google.com/maps?ll=16.06851,108.244748&z=15&t=m&hl=vi&gl=US&mapclient=embed&cid=9285323860247711077",
    className: "Contact-icon-map",
    background: "#ffeb3b",
    src: map,
    alt: "Map",
  },
];

export default ListIconItem;
