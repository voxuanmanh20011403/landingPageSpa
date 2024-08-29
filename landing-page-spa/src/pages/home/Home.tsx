import classNames from "classnames";
import "./Home.scss";
import VideoPlay from "./component/video-play/VideoPlayer";
import video from "../../assets/videos/video-home.mp4";
import SliderBranch from "./component/slider-branch/SliderBranch";
import FormService from "../../common/form-services/FormService";
import NumberCustomer from "./component/number-customer/NumberCustomer";
import TitleComponent from "../../common/title/TitleComponent";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import img from "../../assets/images/home/slider/sr-shape-1-1.png";
import anh1 from "../../assets/images/home/slider/service/1.png";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className={classNames("home content-component")}>
      <div className={classNames("home-content")}>
        <div>
          {/* <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8}>
              <div className="service-style-right">
                <img className="service-style-right-img" src={anh1} alt="" />
                <div className="">
                  <h3 className="service-title">Discover New </h3>
                  <span className="service-text">
                    There are many variations of passages gaks the majority.
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <div className="service-style">
                <img style={{ width: "40%" }} src={img} alt="" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={8}></Col>
          </Row> */}
          <TitleComponent title="HEALING HANDS SPA 5% <br /> OFF FOR PREVIOUS BOOKERS" />
          <div className="description">
            With more than 10 years of experience working as well as teaching in
            the field of massage in Ho Chi Minh City. Coming to service <br />
            Massage Da Nang with enthusiasm and a team of skilled technicians,
            we have been receiving a lot of satisfaction from many customers.
            <br /> We are committed to bringing real value to you.
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          >
            <VideoPlay src={video} />

            <TitleComponent title="Space & Room" />

            <SliderBranch />
          </div>
          <h3 className="refund">{t("home.refund")}</h3>

          <NumberCustomer />

          <TitleComponent title=" BOOK A SERVICE" />

          <FormService />
        </div>
      </div>
    </section>
  );
}
