import React, { useEffect, useRef } from "react";
import "./Banner.css";

function Banner() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate(-50%, calc(-50% + ${
          offset * 0.2
        }px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-image"></div>
      <div ref={overlayRef} className="banner-overlay">
        <h1 className="banner-title">Ideas</h1>
        <p className="banner-subtitle">Where all our great things begin</p>
      </div>
    </div>
  );
}

export default Banner;
