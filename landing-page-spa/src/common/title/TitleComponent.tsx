import { Typography } from "antd";
import img from "../../assets/images/title/image.png";
import React from "react";
import "./styles.scss";
const { Title } = Typography;

interface TitleComponentProps {
  title?: string;
}

export default function TitleComponent(props: TitleComponentProps) {
  const { title } = props;

  return (
    <div>
      <Title
        className="title-common"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        {title?.split("<br />").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split("<br />").length - 1 && <br />}
          </React.Fragment>
        ))}
      </Title>
      <img src={img} alt="Scroll" />
    </div>
  );
}
