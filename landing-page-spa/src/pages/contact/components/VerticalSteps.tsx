import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./VerticalSteps.scss";

const { Step } = Steps;

const VerticalSteps: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const steps = [
    { title: "Step 1", content: t("contact.step1") },
    { title: "Step 2", content: t("contact.step2") },
    { title: "Step 3", content: t("contact.step3") },
    { title: "Step 4", content: t("contact.step4") },
    { title: "Step 5", ontent: t("contact.step5") },
    { title: "Step 6", content: t("contact.step6") },
    { title: "Step 7", content: t("contact.step7") },
    { title: "Step 8", content: t("contact.step8") },
  ];

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
