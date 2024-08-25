import React from "react";
import classNames from "classnames";
import CardService from "./component/card-service/CardService";
import TitleComponent from "../../common/title/TitleComponent";
import { CardServiceProps, ServicesList } from "./Services.string";
import { Col, Row } from "antd";
import "./Services.scss";

export default function Services() {
  return (
    <section className={classNames("service", "content-component")}>
      <TitleComponent title="DỊCH VỤ CỦA CHÚNG TÔI" />

      <Row gutter={[32, 16]} className="custom-row">
        {ServicesList.map((item: CardServiceProps, index: number) => (
          <Col key={index} xs={24} sm={24} md={8}>
            <CardService
              title={item.title}
              urlImage={item.urlImage}
              rate60={item.rate60}
              rate90={item.rate90}
              rate120={item.rate120}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
