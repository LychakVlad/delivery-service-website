import React from 'react';

const ThirdTitle = React.memo(({ title, className }) => {
  return <h3 className={`title ${className}`}>{title}</h3>;
});

export default ThirdTitle;
