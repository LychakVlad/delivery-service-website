import React from 'react';
import './Input.scss';

const Input = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="input-container">
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
    {label && <label htmlFor="input-field">{label}</label>}
  </div>
);

export default Input;
