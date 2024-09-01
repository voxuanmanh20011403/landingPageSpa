import { Col, Row } from "antd";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./NumberCustomer.scss";

export default function NumberCustomer() {
  const { t } = useTranslation();
  return (
    <Row className={classNames("number-customer")}>
      <Col span={8}>
        <p>365</p>
        <h3>{t("home.numberCustomerYear")}</h3>
      </Col>
      <Col span={8}>
        <p>1,750</p>
        <h3>{t("home.numberCustomerSatisfaction")}</h3>
      </Col>
      <Col span={8}>
        <p>20</p>
        <h3>{t("home.numberCustomerAvailable")}</h3>
      </Col>
    </Row>
  );
}
