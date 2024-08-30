import "./IconContact.scss";
import fb from "../../assets/images/contact/fb.png";
import zalo from "../../assets/images/contact/zalo.png";
import whatsapp from "../../assets/images/contact/whatsapp.png";
import kakao from "../../assets/images/contact/kakao.png";
import map from "../../assets/images/contact/map.png";

export default function IconContact() {
  return (
    <>
      <div className="Contact-icon">
        <div className="border-bg" style={{ background: "#2196F3" }}></div>
        <div className="border-img" style={{ background: "#2196F3" }}>
          <img src={zalo}></img>
        </div>
      </div>

      <>
        <div className="Contact-icon-fb">
          <div className="border-bg" style={{ background: "#2196F3" }}></div>
          <div className="border-img" style={{ background: "#2196F3" }}>
            <img src={fb}></img>
          </div>
        </div>
      </>

      <>
        <div className="Contact-icon-whatsapp">
          <div className="border-bg" style={{ background: "#20d142" }}></div>
          <div className="border-img" style={{ background: "#20d142" }}>
            <img src={whatsapp}></img>
          </div>
        </div>
      </>

      <>
        <div className="Contact-icon-kakao">
          <div className="border-bg" style={{ background: "#ffeb3b" }}></div>
          <div className="border-img" style={{ background: "#ffeb3b" }}>
            <img src={kakao}></img>
          </div>
        </div>
      </>
      <>
        <div className="Contact-icon-kakao">
          <div className="border-bg" style={{ background: "#ffeb3b" }}></div>
          <div className="border-img" style={{ background: "#ffeb3b" }}>
            <img src={map}></img>
          </div>
        </div>
      </>
    </>
  );
}
