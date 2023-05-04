import React from 'react';
import './CheckBox.scss';

const CheckBox = ({ checked, onChange, name, label, required, error }) => {
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
      {error && <div className="error-message__checkbox-form">{error}</div>}
    </div>
  );
};

export default CheckBox;
