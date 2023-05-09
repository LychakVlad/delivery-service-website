import React from 'react';
import './CheckBox.scss';

const CheckBox = ({
  checked,
  onChange,
  name,
  label,
  required,
  error,
  description,
}) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox__wrapper">
        <input
          className={`checkbox__input ${error ? 'error' : ''}`}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
        />

        <div className="checkbox__label"> {label}</div>
      </label>
      {description && (
        <div className="description__checkbox-form">{description}</div>
      )}
      {error && <div className="error-message__checkbox-form">{error}</div>}
    </div>
  );
};

export default CheckBox;
