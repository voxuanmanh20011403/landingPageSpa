import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./VerticalSteps.scss";
import classNames from "classnames";

const { Step } = Steps;

const steps = [
  { title: "Step 1", content: "Booking" },
  { title: "Step 2", content: "Spa Confirm qua email hoặc số điện thoại" },
  { title: "Step 3", content: "Đến spa với lịch hẹn" },
  { title: "Step 4", content: "Nhân Viên tư vấn lại các gói" },
  {
    title: "Step 5",
    content: "Thưởng thức trái cây, trà, ngâm chân dược liệu",
  },
  { title: "Step 6", content: "Chọn mùi matxa và các lưu ý cho Kỹ thuật viên" },
  { title: "Step 7", content: "Thay đồ và tận hưởng cảm giác thoải mái" },
  { title: "Step 8", content: "Thanh Toán và góp ý sau khi hoàn thành" },
];

const VerticalSteps: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames("verticalSteps")}>
      <Steps
        direction="vertical"
        current={current}
        className="vertical-steps"
        progressDot={(iconDot, { index }) =>
          current === index ? (
            <ArrowRightOutlined className="arrow-icon" />
          ) : (
            iconDot
          )
        }
      >
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            description={item.content}
            className={`step-item ${current === index ? "active" : ""}`}
          />
        ))}
      </Steps>
    </div>
  );
};

export default VerticalSteps;
