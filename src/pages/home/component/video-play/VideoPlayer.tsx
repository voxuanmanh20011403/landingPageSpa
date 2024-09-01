import React, { useRef, useEffect, useState } from 'react';

interface IProp {
  src?: string;
}

const VideoPlay: React.FC<IProp> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video ref={videoRef} width="90%" height="60%" autoPlay muted loop>
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default VideoPlay;
