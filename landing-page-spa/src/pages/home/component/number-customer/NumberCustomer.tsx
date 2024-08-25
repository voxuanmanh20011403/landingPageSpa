import { Col, Row } from "antd";
import React from "react";

export default function NumberCustomer() {
  return (
    <Row>
      <Col span={8}>
        <span>365</span>
        <h6>Opening day of the year</h6>
      </Col>
      <Col span={8}>
        <span>1,750</span>
        <h6>Customer Satisfaction</h6>
      </Col>
      <Col span={8}>
        <span>20</span>
        <h6>Beds are available</h6>
      </Col>
    </Row>
  );
}
