import classNames from "classnames";
import React from "react";
import FormService from "../../common/form-services/FormService";
import { Card, Col, Row } from "antd";
import TitleComponent from "../../common/title/TitleComponent";

export default function Contact() {
  return (
    <section className={classNames("content-component")}>
      <TitleComponent title="CONTACT US" />
      <Col xs={24} sm={24} md={12}></Col>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <Card hoverable cover={<FormService />}></Card>
        </Col>

        <Col xs={24} sm={24} md={12}></Col>
      </Row>
    </section>
  );
}
