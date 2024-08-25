import { Card } from "antd";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface CardServiceProps {
  urlImage?: string;
  title?: string;
  rate60?: string;
  rate90?: string;
  rate120?: string;
}
const { Meta } = Card;

export default function CardService(props: CardServiceProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const { urlImage, title, rate60, rate90, rate120 } = props;

  const handleImageLoad = () => {
    setLoading(false);
  };

  // Media query for tablet or mobile devices
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Card
      loading={loading}
      hoverable
      cover={<img alt="example" src={urlImage} onLoad={handleImageLoad} />}
    >
      <div style={{ display: isTabletOrMobile ? "none" : "block" }}>
        <Meta
          title={title}
          description={`60min: ${rate60}, 90min: ${rate90}, 120min: ${rate120}`}
        />
      </div>
    </Card>
  );
}
