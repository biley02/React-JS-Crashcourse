import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location.pathname === "/" ? (
        <Link to="/about">About</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
    </footer>
  );
};

export default Footer;
