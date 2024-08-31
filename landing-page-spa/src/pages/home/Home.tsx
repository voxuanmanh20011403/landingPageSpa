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
          <TitleComponent title={t("home.title")} />
          <div className="description">
            {t("home.description1")}
            <br />
            {t("home.description2")}
            <br />
            {t("home.description3")}
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          >
            <VideoPlay src={video} />

            <TitleComponent title={t("home.spaceRoom")} />

            <SliderBranch />
          </div>
          <h3 className="refund">{t("home.refund")}</h3>

          <NumberCustomer />

          <TitleComponent title={t("home.bookService")} />

          <FormService />
        </div>
      </div>
    </section>
  );
}
