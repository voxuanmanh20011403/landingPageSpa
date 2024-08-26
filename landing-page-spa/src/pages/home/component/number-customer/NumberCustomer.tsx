import { Col, Row } from "antd";
import classNames from "classnames";
import "./NumberCustomer.scss";

export default function NumberCustomer() {
  return (
    <Row className={classNames("number-customer")}>
      <Col span={8}>
        <span>365</span>
        <h3>Opening day of the year</h3>
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
