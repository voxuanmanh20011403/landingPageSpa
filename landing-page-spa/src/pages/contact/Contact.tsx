import classNames from "classnames";
import FormService from "../../common/form-services/FormService";
import { Col, Row } from "antd";
import TitleComponent from "../../common/title/TitleComponent";
import VerticalSteps from "./components/VerticalSteps";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className={classNames("content-component")}>
      <TitleComponent title={t("contact.title")} />
      <Col xs={24} sm={24} md={12}></Col>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={15}>
          <FormService />
        </Col>

        <Col xs={24} sm={24} md={9}>
          <div style={{ padding: "20px" }}>
            <VerticalSteps />
          </div>
        </Col>
      </Row>
    </section>
  );
}
