import React, { useState } from 'react';
import './Toggle.scss';

const Toggle = ({ clickHandle, firstTitle, secondTitle }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    clickHandle();
    setActive(!active);
  };

  return (
    <div className={`toggle ${active ? 'active' : ''}`} onClick={handleToggle}>
      <span className="toggle-label">{firstTitle}</span>
      <div className="toggle-ball"></div>
      <span className="toggle-label">{secondTitle}</span>
    </div>
  );
};

export default Toggle;
