import FooterComponent from "./components/Footer/Index";
import { Outlet } from "react-router-dom";
import ContentComponent from "./components/Content/Index";
import { Flex, Layout } from "antd";
import HeaderComponent from "./components/Header/Index";
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};
export default function LayoutComponent() {
  return (
    <>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <HeaderComponent />
          <ContentComponent>
            <Outlet />
          </ContentComponent>
          <FooterComponent />
        </Layout>
      </Flex>
    </>
  );
}
