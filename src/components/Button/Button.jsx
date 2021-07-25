import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button" type="submit">
      {children}
    </button>
  );
};

export default Button;
