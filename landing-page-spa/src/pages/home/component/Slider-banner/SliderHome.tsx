import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderHome.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../../../assets/images/home/slider/1.jpg";
import slide2 from "../../../../assets/images/home/slider/5.jpg";

import slide3 from "../../../../assets/images/home/slider/service/image.png";
import classNames from "classnames";
import { SendOutlined } from "@ant-design/icons";

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
        <SwiperSlide className="swiper-slide">
          <span>Spa & Beauty Center</span>
          <span>Liệu pháp</span>
          <span>spa chuyên nghiệp</span>
          <span>
            Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam
            kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của
            bạn.
          </span>
          <button className={classNames("swiper-slide-button")}>
            Đặt lịch ngay
            <SendOutlined />
          </button>
          <img style={{ height: "509px" }} src={slide1} alt="Spa Image" />
        </SwiperSlide>
        <SwiperSlide>
          <span>Spa & Beauty Center</span>
          <span>Liệu pháp</span>
          <span>spa chuyên nghiệp</span>
          <span>
            Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam
            kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của
            bạn.
          </span>
          <button className={classNames("swiper-slide-button")}>
            Đặt lịch ngay
            <SendOutlined />
          </button>
          <img style={{ height: "509px" }} src={slide2}></img>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <span>Spa & Beauty Center</span>
          <span>Liệu pháp</span>
          <span>spa chuyên nghiệp</span>
          <span>
            Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam
            kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của
            bạn.
          </span>
          <button className={classNames("swiper-slide-button")}>
            Đặt lịch ngay
            <SendOutlined />
          </button>
          <img style={{ height: "509px" }} src={slide3} alt="Spa Image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
