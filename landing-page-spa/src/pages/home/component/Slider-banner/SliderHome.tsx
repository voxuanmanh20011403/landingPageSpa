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
      text1: t("spaCenter"),
      text2: "Spa thư giãn ",
      text3: "Và phục hồi",
      text4:
        "Tất cả những điều bạn cần để tận hưởng một trải nghiệm spa tuyệt vời đều có tại Spa chúng tôi.",
    },
    {
      image: slide2,
      text1: t("spaCenter"),
      text2: "Chăm sóc ",
      text3: "toàn diện cơ thể",
      text4:
        "Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.",
    },
    {
      image: slide3,
      text1: t("spaCenter"),
      text2: "Chuyên nghiệp",
      text3: "toàn diện cơ thể",
      text4:
        "Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.",
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
        delay: 10000,
        disableOnInteraction: false,
      }}
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
              type="primary"
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
                Đặt Lịch
              </span>
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderHome;
