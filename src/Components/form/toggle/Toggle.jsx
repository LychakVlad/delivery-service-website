import React, { useState } from 'react';
import './Toggle.scss';

const Toggle = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`toggle ${active ? 'active' : ''}`} onClick={handleToggle}>
      <span className="toggle-label">Estimated</span>
      <div className="toggle-ball"></div>
      <span className="toggle-label">Exactly</span>
    </div>
  );
};

export default Toggle;
