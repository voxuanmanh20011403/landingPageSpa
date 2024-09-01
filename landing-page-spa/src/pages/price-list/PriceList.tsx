import classNames from "classnames";
import { useTranslation } from "react-i18next";
import TitleComponent from "../../common/title/TitleComponent";
import menu1 from "../../assets/images/price-lists/menu1.jpg";
import menu2 from "../../assets/images/price-lists/menu2.jpg";

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
