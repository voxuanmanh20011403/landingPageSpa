import { Col, Layout, Row } from "antd";
import classNames from "classnames";
import "./Styles.scss";
import { Space, Typography } from "antd";
const { Footer } = Layout;
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  SkypeOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import MapComponent from "../../../common/google-map/MapComponent";
const { Text } = Typography;
export default function FooterComponent() {
  return (
    <Footer className={classNames("footer-component")}>
      <div className="footer-component-row">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8}>
            <h1>Zenith Spa</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
            exercitationem fugiat architecto laboriosam excepturi enim atque
            nihil neque ipsam corporis delectus modi iure molestias voluptatum
            omnis assumenda, voluptates et.
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Row justify="center">
              <Col>
                <Typography.Title level={4} style={{ color: "white" }}>
                  THÔNG TIN LIÊN LẠC
                </Typography.Title>
                <Space direction="vertical" size="middle">
                  <Space>
                    <HomeOutlined />
                    <Text>
                      319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                    </Text>
                  </Space>
                  <Space>
                    <PhoneOutlined />
                    <Text>1900 636 648</Text>
                  </Space>
                  <Space>
                    <MailOutlined />
                    <Text>demonhunterg@gmail.com</Text>
                  </Space>
                  <Space>
                    <MailOutlined />
                    <Text>mon@mona.media</Text>
                  </Space>
                  <Space>
                    <SkypeOutlined />
                    <Text>demonhunterp</Text>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8}>
            {/* <Row justify="center">
              <Typography.Title level={4} style={{ color: "white" }}>
                <Space>
                  <TwitterOutlined />
                  <FacebookOutlined />
                  <LinkedinOutlined />
                  <YoutubeOutlined />
                  <GithubOutlined />
                </Space>
              </Typography.Title>
            </Row> */}
            <MapComponent />
          </Col>
        </Row>
      </div>
    </Footer>
  );
}
