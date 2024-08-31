import ListIcon from "./components/ListIcon";
import "./IconContact.scss";
import ListIconItem from "./IconContact.string";
interface ListIconProps {
  href?: string;
  className?: string;
  background?: string;
  src?: string;
  alt?: string;
}
export default function IconContact() {
  return (
    <>
      {ListIconItem.map((item: ListIconProps) => (
        <ListIcon
          href={item.href}
          className={item.className}
          background={item.background}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </>
  );
}
