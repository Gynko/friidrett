import React from "react";
import "./button.styles.css";

export default function Button({ text, color, onClick, width }) {
  return (
    <button className={`button-${color} button-${width}`} onClick={onClick}>
      {`${text}`}
    </button>
  );
}
