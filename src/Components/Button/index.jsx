import React from "react";
const Button = (props) => {
  const { onClick, children, className, type, primary } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${primary ? "primary" : ""}`}
    >
      {children}
    </button>
  );
};
export default Button;
