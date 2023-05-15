import React from 'react';

export const RatesRow = ({ content }) => {
  return (
    <div className="rates__row">
      <p className="rates__text--fw-thin">{content.title}</p>
      <p className="rates__text">{content.text}</p>
    </div>
  );
};
