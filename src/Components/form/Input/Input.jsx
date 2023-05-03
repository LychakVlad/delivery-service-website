import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Input.scss';

const Input = ({ value, label, name, placeholder, type, onChange }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event) => {
    onChange(event);
    setIsFilled(!!event.target.value);
  };

  const handleClearInput = () => {
    onChange({ target: { name, value: '' } });
    setIsFilled(false);
  };

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        name={name}
        className={`form-control${isFilled ? ' filled' : ''}`}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {label && <label htmlFor="input-field">{label}</label>}
      {isFilled && (
        <span className="cross-icon" onClick={handleClearInput}>
          <CloseIcon />
        </span>
      )}
    </div>
  );
};

export default Input;
