import classNames from "classnames";
import "./Home.scss";
import VideoPlay from "./component/video-play/VideoPlayer";
import video from "../../assets/videos/video-home.mp4";
import SliderBranch from "./component/slider-branch/SliderBranch";
import FormService from "../../common/form-services/FormService";
import NumberCustomer from "./component/number-customer/NumberCustomer";
import TitleComponent from "../../common/title/TitleComponent";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className={classNames("home content-component")}>
      <div className={classNames("home-content")}>
        <div>
          <TitleComponent title="HEALING HANDS SPA 5% <br /> OFF FOR PREVIOUS BOOKERS" />
          <div>
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

            <TitleComponent title="Massage Branches" />

            <SliderBranch />
          </div>
          <h3>{t("home.refund")}</h3>

          <NumberCustomer />

          <TitleComponent title=" BOOK A SERVICE" />

          <FormService />
        </div>
      </div>
    </section>
  );
}
