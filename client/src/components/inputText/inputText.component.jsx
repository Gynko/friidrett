import React from 'react';
import "./inputText.styles.css"

export default function InputText({ type = 'text', placeholder, value, name, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className="input-text"
        />
    );
}