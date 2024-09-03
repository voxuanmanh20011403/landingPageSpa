import classNames from "classnames";
import CardService from "./component/card-service/CardService";
import TitleComponent from "../../common/title/TitleComponent";
import { CardServiceProps, ServicesList } from "./Services.string";
import { Col, Row } from "antd";
import "./Services.scss";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <section className={classNames("service", "content-component")}>
      <TitleComponent title={t("service.title")} />

      <Row gutter={[32, 16]} className="custom-row">
        {ServicesList.map((item: CardServiceProps, index: number) => (
          <Col key={index} xs={24} sm={24} md={8}>
            <CardService
              title={item.title}
              urlImage={item.urlImage}
              rate60={item.rate60}
              rate90={item.rate90}
              rate120={item.rate120}
              rate60plus={item.rate60plus}
              rate90plus={item.rate90plus}
              title2={item.title2}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
