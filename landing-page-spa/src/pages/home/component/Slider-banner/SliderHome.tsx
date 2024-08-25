import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderHome.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../../../assets/images/slide1.jpg";
import slide2 from "../../../../assets/images/banner-3.jpg";

import slide5 from "../../../../assets/images/banner-5.jpg";

export default function SliderHome() {
  return (
    <div className="sliderHome">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img style={{ height: "509px" }} src={slide1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "509px" }} src={slide2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "509px" }} src={slide5}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
