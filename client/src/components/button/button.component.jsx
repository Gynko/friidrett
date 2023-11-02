import React from "react";
import "./button.styles.css";

export default function Button({ text, color, onClick, width, ...otherProps }) {
  return (
    <button
      className={`button-${color} button-${width}`}
      onClick={onClick}
      {...otherProps}
    >
      {`${text}`}
    </button>
  );
}
