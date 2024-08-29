import { Col, Row } from 'antd';
import classNames from 'classnames';
import './NumberCustomer.scss';

export default function NumberCustomer() {
  return (
    <Row className={classNames('number-customer')}>
      <Col span={8}>
        <p>365</p>
        <h3>Opening day of the year</h3>
      </Col>
      <Col span={8}>
        <p>1,750</p>
        <h3>Customer Satisfaction</h3>
      </Col>
      <Col span={8}>
        <p>20</p>
        <h3>Beds are available</h3>
      </Col>
    </Row>
  );
}
