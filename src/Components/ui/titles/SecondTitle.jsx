import React from 'react';

const SecondTitle = ({ title, className }) => {
  return <h2 className={`title ${className}`}>{title}</h2>;
};

export default SecondTitle;
