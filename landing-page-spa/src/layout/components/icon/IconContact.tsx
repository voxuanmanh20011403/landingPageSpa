import React from "react";
import "./IconContact.scss";
import map from "../../../assets/images/contact/map.png";
import mess from "../../../assets/images/contact/mess.png";
import zalo from "../../../assets/images/contact/zalo.png";

export default function IconContact() {
  return (
    <>
      <div className="Contact-icon">
        <div className="halbg" style={{ background: "#2196F3" }}></div>
        <div className="halimg" style={{ background: "#2196F3" }}>
          <img src={zalo}></img>
        </div>
      </div>
    </>
  );
}
