import React, { useCallback, useState } from 'react';
import './Toggle.scss';

const Toggle = React.memo(({ clickHandle, firstTitle, secondTitle, test }) => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => {
    clickHandle();
    setActive(!active);
  }, [clickHandle, active]);

  return (
    <div
      className={`toggle ${active ? 'active' : ''}`}
      onClick={handleToggle}
      data-testid={test ? test : ''}
    >
      <span className="toggle-label">{firstTitle}</span>
      <div className="toggle-ball"></div>
      <span className="toggle-label">{secondTitle}</span>
    </div>
  );
});

export default Toggle;
