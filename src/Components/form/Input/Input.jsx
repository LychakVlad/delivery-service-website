import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Input.scss';

const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  required,
  error,
  className,
  description,
  maxLength,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(!!value);
  }, [value]);

  const handleInputChange = (event) => {
    if (type === 'number') {
      const inputValue = event.target.value;
      if (inputValue < 0) {
        return;
      }
    }
    onChange(event);
  };

  const handleClearInput = () => {
    onChange({ target: { name, value: '' } });
  };

  return (
    <div>
      <div
        className={`input-container  ${error ? 'error' : ''} ${
          className ? className : ''
        }`}
      >
        <input
          type={type}
          value={value}
          name={name}
          className={`form-control ${isFilled ? 'filled' : ''} ${
            error ? 'error' : ''
          }`}
          placeholder={placeholder}
          onChange={handleInputChange}
          required={required}
          maxLength={maxLength}
        />

        {label && <label htmlFor={name}>{label}</label>}
        {isFilled && (
          <span className="cross-icon" onClick={handleClearInput}>
            <CloseIcon />
          </span>
        )}
      </div>
      {description && <div className="input-description">{description}</div>}
      {name === 'width' ||
      name === 'height' ||
      name === 'length' ||
      name === 'weight'
        ? ''
        : error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
