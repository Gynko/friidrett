import React from 'react';
import "./button.styles.css"

const Button = ({ label, color, onClick }) => (
    <button className="main-button" onClick={onClick}>
      {label}
    </button>
  );


export default Button;