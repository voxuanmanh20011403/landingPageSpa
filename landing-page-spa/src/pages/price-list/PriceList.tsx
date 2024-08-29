import TitleComponent from "../../common/title/TitleComponent";
import classNames from "classnames";
import menu1 from "../../assets/images/menu1.jpg";
import menu2 from "../../assets/images/menu2.jpg";

export default function PriceList() {
  return (
    <section className={classNames(" content-component")}>
      <TitleComponent title="OUR SERVICE PRICE LIST" />
      <img style={{ width: "inherit", padding: "5%" }} src={menu1}></img>
      <img style={{ width: "inherit", padding: "5%" }} src={menu2}></img>
    </section>
  );
}
