import { Layout, Row } from "antd";
import classNames from "classnames";
import "./Styles.scss";
const { Footer } = Layout;

export default function FooterComponent() {
  return (
    <Footer className={classNames("footer-component")}>
      <Row className={classNames("footer-row")}>
        {/* <Row>
          <Col span={6}>A</Col>
          <Col span={10}>A</Col>
          <Col span={8}>A</Col>
        </Row>
        <Row>
          <Col span={8}>B</Col>
          <Col span={8}>B</Col>
          <Col span={8}>B</Col>
        </Row> */}
      </Row>
    </Footer>
  );
}
