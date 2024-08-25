import classNames from "classnames";
import React from "react";
import { Col, Row } from "antd";
import img from "../../assets/images/slide1.jpg";
import img1 from "../../assets/images/slide2.jpg";
import TitleComponent from "../../common/title/TitleComponent";

export default function SpaceRoom() {
  const images = [img, img1, img1, img];
  return (
    <section className={classNames("home", "content-component")}>
      <div style={{ padding: "20px" }}>
        <TitleComponent title="SPACE AND ROOM SPA" />
        <Row gutter={[16, 16]}>
          {images.map((image, index) => (
            <Col key={index} xs={24} sm={24} md={12}>
              <img
                src={image}
                alt={`Spa image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
