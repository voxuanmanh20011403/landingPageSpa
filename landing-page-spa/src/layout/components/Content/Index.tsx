import React from "react";
import { Layout } from "antd";
import "./Styles.scss";
interface IndexProps {
  children: React.ReactNode;
}
const { Content } = Layout;

export default function ContentComponent({ children }: IndexProps) {
  return <Content>{children}</Content>;
}
