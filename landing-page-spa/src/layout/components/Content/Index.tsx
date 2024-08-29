import React from "react";
import { Layout } from "antd";
import "./Styles.scss";
import IconContact from "../icon/IconContact";
import ScrollToTopButton from "../back-to-top/ScrollToTopButton";
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
