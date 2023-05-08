import React, { useState } from 'react';
import axios from 'axios';

const AutocompleteInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.length > 0) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&accept-language=en`
        )
        .then((response) => {
          setSuggestions(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setSearchTerm(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.osm_id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
