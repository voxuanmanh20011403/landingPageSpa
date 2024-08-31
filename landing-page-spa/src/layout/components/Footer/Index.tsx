import { Col, Layout, Row } from "antd";
import classNames from "classnames";
import "./Styles.scss";
import { Space, Typography } from "antd";
const { Footer } = Layout;
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import MapComponent from "../../../common/google-map/MapComponent";
import { useTranslation } from "react-i18next";
const { Text } = Typography;
export default function FooterComponent() {
  const { t } = useTranslation();
  return (
    <Footer className={classNames("footer-component")}>
      <div className="footer-component-row">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
            <h1>{t("footer.spa.title")}</h1>
            {t("footer.spa.content")}
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Row>
              <Col>
                <Typography.Title level={4} style={{ color: "white" }}>
                  {t("footer.information.title")}
                </Typography.Title>
                <Space direction="vertical" size="middle">
                  <Space>
                    <HomeOutlined />
                    <Text>{t("footer.information.address")}</Text>
                  </Space>
                  <Space>
                    <PhoneOutlined />
                    <Text>{t("footer.information.phone")}</Text>
                  </Space>
                  <Space>
                    <MailOutlined />
                    <Text>{t("footer.information.email")}</Text>
                  </Space>
                  <Space>
                  <FacebookOutlined />

                    <Text>{t("footer.information.facebook")}</Text>
                  </Space>
                  
                  <Space>
                    <WhatsAppOutlined />

                    <Text>{t("footer.information.phone")}</Text>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Row>
              <Typography.Title level={4} style={{ color: "white" }}>
                GOOGLE MAPS
              </Typography.Title>
              <MapComponent />
            </Row>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}
