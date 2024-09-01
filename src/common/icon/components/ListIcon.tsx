interface ListIconProps {
  href?: string;
  className?: string;
  background?: string;
  src?: string;
  alt?: string;
}
import classNames from "classnames";
import "../IconContact.scss";
export default function ListIcon(props: ListIconProps) {
  const { href, className, background, src, alt } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(className, "icon-link")}
    >
      <div className="border-bg" style={{ background: background }}></div>
      <div className="border-img" style={{ background: background }}>
        <img src={src} alt={alt} />
      </div>
    </a>
  );
}
