import React from 'react';
import './CheckBox.scss';

const CheckBox = ({ checked, onChange, name, label }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox__wrapper">
        <input
          className="checkbox__input"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <div className="checkbox__label"> {label}</div>
      </label>
    </div>
  );
};

export default CheckBox;
