import { Button, Drawer, Layout, Menu, Select } from "antd";
import { useState } from "react";
import classNames from "classnames";
import { MenuOutlined } from "@ant-design/icons";
import "./Styles.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import eng from "../../../assets/images/local/engl.png";
import kor from "../../../assets/images/local/kor.png";
import logo from "../../../assets/images/logo_zeni.png";

const { Header } = Layout;
const { Option } = Select;

const headerStyle: React.CSSProperties = {
  display: "flex",
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

const menu: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  width: "100%",
  fontFamily: "Work Sans",
};

export default function HeaderComponent() {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLanguageChange = (value: string): void => {
    i18n.changeLanguage(value);
  };

  const handleMenuClick = (e: any) => {
    createFlowerEffect(e.domEvent);
    navigate(e.key);
  };

  const createFlowerEffect = (event: any) => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${event.clientX}px`;
    flower.style.top = `${event.clientY}px`;
    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 1000);
  };

  return (
    <>
      <Header style={headerStyle} className={classNames("header-component")}>
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className="logo-menu-laptop"
        />
        <Menu
          className={classNames("laptop-menu")}
          style={menu}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          selectedKeys={[window.location.pathname]}
          onClick={handleMenuClick}
          items={[
            {
              label: t("home"),
              key: "/",
            },
            {
              label: t("services"),
              key: "/services",
            },
            {
              label: t("priceList"),
              key: "/price-list",
            },
            {
              label: t("contact"),
              key: "/contact",
            },
          ]}
        />

        <Button
          className="mobile-menu-button"
          type="primary"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ display: "block" }}
        />

        <Select
          defaultValue={i18n.language}
          onChange={handleLanguageChange}
          className="language-select"
        >
          <Option value="en">
            <img src={eng} style={{ paddingRight: "5px" }} />
            English
          </Option>
          <Option value="kor">
            <img src={kor} style={{ paddingRight: "5px" }} />
            한국어
          </Option>
        </Select>

        <Drawer
          title="Menu"
          placement="left"
          onClose={onClose}
          visible={visible}
          closable={true}
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={["/"]}
            selectedKeys={[window.location.pathname]}
            onClick={handleMenuClick}
            items={[
              {
                label: t("home"),
                key: "/",
              },
              {
                label: t("services"),
                key: "/services",
              },
              {
                label: t("priceList"),
                key: "/price-list",
              },
              {
                label: t("contact"),
                key: "/contact",
              },
            ]}
          ></Menu>
        </Drawer>
      </Header>
    </>
  );
}
