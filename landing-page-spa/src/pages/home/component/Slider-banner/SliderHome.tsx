import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderHome.scss";

import { Button } from "antd";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import slide1 from "../../../../assets/images/home/slider/1.jpg";
import slide2 from "../../../../assets/images/home/slider/5.jpg";

import slide3 from "../../../../assets/images/home/slider/service/image.png";

const SliderHome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const slides = [
    {
      image: slide1,
      text1: t("home.SliderHome.slider1.text1"),
      text2: t("home.SliderHome.slider1.text2"),
      text3: t("home.SliderHome.slider1.text3"),
      text4: t("home.SliderHome.slider1.text4"),
    },
    {
      image: slide2,
      text1: t("home.SliderHome.slider1.text1"),
      text2: t("home.SliderHome.slider2.text2"),
      text3: t("home.SliderHome.slider2.text3"),
      text4: t("home.SliderHome.slider2.text4"),
    },
    {
      image: slide3,
      text1: t("home.SliderHome.slider1.text1"),
      text2: t("home.SliderHome.slider3.text2"),
      text3: t("home.SliderHome.slider3.text3"),
      text4: t("home.SliderHome.slider3.text4"),
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={2000}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="sliderHome"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "509px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              width: "inherit",
            }}
          >
            <span>{slide.text1}</span>
            <span>{slide.text2}</span>
            <span>{slide.text3}</span>
            <span>{slide.text4}</span>
            <Button
              // type="primary"
              style={{
                display: "flex",
                alignItems: "center",
                width: "30%",
                border: "none",
                padding: "0",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              <span
                style={{
                  color: "rgb(255, 255, 255)",
                  fontSize: "20px",
                }}
              >
                {t("home.SliderHome.booking")}
              </span>
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderHome;
