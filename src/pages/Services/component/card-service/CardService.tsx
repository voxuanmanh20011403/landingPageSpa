import { useState } from "react";
import { Card } from "antd";
import "./CardService.scss";

interface CardServiceProps {
  urlImage?: string;
  title?: string;
  rate60?: string;
  rate90?: string;
  rate120?: string;
  rate60plus?: string;
  rate90plus?: string;
  title2?: string;
}

const CardService = (props: CardServiceProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  const {
    urlImage,
    title,
    rate60,
    rate90,
    rate120,
    rate60plus,
    rate90plus,
    title2,
  } = props;
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
              {rate60 && (
                <div>
                  {rate60} <br />
                </div>
              )}
              {rate90 && (
                <div>
                  {rate90} <br />
                </div>
              )}
              {rate120} <br />
            </>
            {title2 && (
              <>
                <span
                  style={{ fontWeight: "bold", color: " rgba(0, 0, 0, 0.88)" }}
                >
                  {title2}
                </span>{" "}
                <br />
                Rates: <br />
                {rate60plus} <br />
                {rate90plus} <br />
              </>
            )}
          </>
        }
      />
    </Card>
  );
};

export default CardService;
