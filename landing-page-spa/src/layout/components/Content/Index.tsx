import React from "react";
import { Layout } from "antd";
import IconContact from "../../../common/icon/IconContact";
import ScrollToTopButton from "../../../common/back-to-top/ScrollToTopButton";
import "./Styles.scss";
interface IndexProps {
  children: React.ReactNode;
}
const { Content } = Layout;

export default function ContentComponent({ children }: IndexProps) {
  return (
    <Content>
      {children}
      <ScrollToTopButton />
      <IconContact />
    </Content>
  );
}
