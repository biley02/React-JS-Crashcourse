import React from "react";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, onAdd, showAdd }) => {
  //Location is used to get the current route pathname
  const location = useLocation();

  return (
    <header className="header">
      <h1> {title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
