import React from 'react';

const FirstTitle = React.memo(({ title, className }) => {
  return <h1 className={`title ${className}`}>{title}</h1>;
});

export default FirstTitle;
