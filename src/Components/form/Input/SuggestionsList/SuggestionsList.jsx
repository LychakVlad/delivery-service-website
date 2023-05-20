import React from 'react';
import './SuggestionsList.scss';

const SuggestionsList = ({ suggestions, handleSelect }) => {
  return (
    <ul className="suggestions__list">
      {suggestions.map((suggestion) => (
        <li
          className="suggestions__point"
          key={suggestion.osm_id}
          onClick={() => handleSelect(suggestion)}
        >
          {suggestion.display_name}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
