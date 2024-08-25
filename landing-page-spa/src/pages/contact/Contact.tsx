import classNames from "classnames";
import React from "react";
import FormService from "../../common/form-services/FormService";
import { Card, Col, Row } from "antd";

export default function Contact() {
  return (
    <section className={classNames("content-component")}>
      <Col xs={24} sm={24} md={12}></Col>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={3}>
          {/* <div>
            <h1>ĐỊA CHỈ</h1>
            <h6>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</h6>
          </div>
          <div>
            <h1>YÊU CẦU ĐẶT PHÒNG Ỉ</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              totam architecto nesciunt esse aspernatur sapiente aut recusandae
              autem ipsam inventore et consequatur ad ut quos, id dolor officia
              assumenda obcaecati!
            </h6>
          </div> */}
        </Col>

        <Col xs={24} sm={24} md={16}>
          <Card
            style={{ width: "50%" }}
            hoverable
            cover={<FormService />}
          ></Card>
        </Col>
      </Row>
    </section>
  );
}
