import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(false); 
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop}className={`scroll-to-top ${isVisible ? 'fade-in' : 'fade-out'}`}>
          <ArrowUpOutlined />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
