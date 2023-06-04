import React from 'react';

const SuggestionsNothing = () => {
  return (
    <ul className="suggestions__list">
      <li className="suggestions__loading-block ">
        <p className="suggestions__loading-text">Nothing found</p>
      </li>
    </ul>
  );
};

export default SuggestionsNothing;
