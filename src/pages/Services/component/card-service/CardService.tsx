import { useState } from "react";
import { Card } from "antd";
import "./CardService.scss";

interface CardServiceProps {
  urlImage?: string;
  title?: string;
  rate60?: string;
  rate90?: string;
  rate120?: string;
}

const CardService = (props: CardServiceProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  const { urlImage, title, rate60, rate90, rate120 } = props;
  return (
    <Card
      loading={loading}
      hoverable
      cover={
        <div className="image-container">
          <img
            src={urlImage}
            alt={title}
            className="service-image"
            onLoad={handleImageLoad}
          />
        </div>
      }
    >
      <Card.Meta
        title={title}
        description={
          <>
            <>
              Rates: <br />
              {rate60} <br />
              {rate90} <br />
              {rate120}
            </>
          </>
        }
      />
    </Card>
  );
};

export default CardService;
