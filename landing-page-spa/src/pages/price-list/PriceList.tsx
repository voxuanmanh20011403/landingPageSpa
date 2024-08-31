import TitleComponent from "../../common/title/TitleComponent";
import classNames from "classnames";
import menu1 from "../../assets/images/menu1.jpg";
import menu2 from "../../assets/images/menu2.jpg";
import { useTranslation } from "react-i18next";

export default function PriceList() {
  const { t } = useTranslation();
  return (
    <section className={classNames(" content-component")}>
      <TitleComponent title={t("priceList.title")} />
      <img style={{ width: "inherit", padding: "5%" }} src={menu1}></img>
      <img style={{ width: "inherit", padding: "5%" }} src={menu2}></img>
    </section>
  );
}
