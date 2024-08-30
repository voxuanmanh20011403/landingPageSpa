import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Xử lý sự kiện cuộn
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
    setIsVisible(false); // Ẩn nút khi đã cuộn lên đầu trang
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
