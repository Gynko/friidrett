import React from 'react';

export default function InputText({ type = 'text', placeholder, value, onChange, name }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className="custom-input"
        />
    );
}