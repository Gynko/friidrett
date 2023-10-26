import React from 'react';
import "./button.styles.css"
 function Button({ label, color, onClick }) {
    const buttonStyle = {
        backgroundColor: color
    };
  return (
      <button style={buttonStyle} className="main-button" onClick={onClick}>
          {label}
      </button>
  );
}


export default Button;