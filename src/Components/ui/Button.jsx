import React from 'react';
import './Button.scss';

const Button = ({ children, style, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
