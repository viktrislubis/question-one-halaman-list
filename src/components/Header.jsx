import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className={`main-header ${showHeader ? "visible" : "hidden"}`}>
      <div className="nav-wrapper">
        <div className="logo">
          <img src="/logoo.png" alt="Suitmedia" />
        </div>
        <nav className="nav">
          <Link to="/work" className={getActiveClass("/work")}>
            Work
          </Link>
          <Link to="/about" className={getActiveClass("/about")}>
            About
          </Link>
          <Link to="/services" className={getActiveClass("/services")}>
            Services
          </Link>
          <Link to="/" className={getActiveClass("/")}>
            Ideas
          </Link>
          <Link to="/careers" className={getActiveClass("/careers")}>
            Careers
          </Link>
          <Link to="/contact" className={getActiveClass("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
