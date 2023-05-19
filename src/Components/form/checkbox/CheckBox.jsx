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
  test,
  testError,
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
          data-testid={test ? test : undefined}
        />

        <div className="checkbox__label"> {label}</div>
      </label>
      {description && (
        <div className="description__checkbox-form">{description}</div>
      )}
      {error && (
        <div
          className="error-message__checkbox-form"
          data-testid={testError ? testError : undefined}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default CheckBox;
