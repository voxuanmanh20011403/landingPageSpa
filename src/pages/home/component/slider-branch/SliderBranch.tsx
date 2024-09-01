import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.scss";

import { EffectCoverflow, Pagination } from "swiper/modules";
import img1 from "../../../../assets/images/home/slider/1.jpg";
import img2 from "../../../../assets/images/home/slider/2.jpg";
import img3 from "../../../../assets/images/home/slider/3.jpg";
import img4 from "../../../../assets/images/home/slider/4.jpg";
import img5 from "../../../../assets/images/home/slider/5.jpg";
import img6 from "../../../../assets/images/home/slider/6.jpg";
import img7 from "../../../../assets/images/home/slider/7.jpg";
import img8 from "../../../../assets/images/home/slider/8.jpg";

const image = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function SliderBranch() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {image.map((i) => (
          <SwiperSlide>
            <img src={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
