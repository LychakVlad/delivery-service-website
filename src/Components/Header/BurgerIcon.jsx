import React, { useState } from 'react';
import './Header.scss';

const BurgerIcon = ({ onClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    onClick();
  };

  return (
    <div
      className={`burger-icon ${active ? 'active' : 'not-active'}`}
      onClick={handleClick}
    >
      <div className={`btn ${active ? 'active' : 'not-active'}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerIcon;
