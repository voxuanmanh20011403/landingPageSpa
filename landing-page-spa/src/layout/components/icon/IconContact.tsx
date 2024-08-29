import "./IconContact.scss";
import fb from "../../../assets/images/contact/fb.png";
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

      <>
        <div className="Contact-icon-fb">
          <div className="halbg" style={{ background: "#2196F3" }}></div>
          <div className="halimg" style={{ background: "#2196F3" }}>
            <img src={fb}></img>
          </div>
        </div>
      </>
    </>
  );
}
