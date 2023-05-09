import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress } from '@mui/material';

const AutocompleteInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  required,
  error,
  setError,
  className,
  description,
  setSearchTerm,
  setCoords,
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsFilled(!!value);
  }, [value]);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.length > 0) {
      setLoading(true);
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&extratags=place_id,display_name,type,lat,lon&accept-language=en&countrycodes=us`
        )
        .then((response) => {
          const suggestions = response.data;
          setSuggestions(suggestions);
          setError(!suggestions.find((s) => s.display_name === searchTerm));
          if (
            suggestions.length > 0 &&
            suggestions[0].display_name === searchTerm
          ) {
            handleSelect(suggestions[0]);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSuggestions([]);
      setError(false);
    }
  };

  const handleClearInput = () => {
    handleChange({ target: { name, value: '' } });
  };

  const handleSelect = (suggestion) => {
    setCoords(() => ({
      lat: suggestion.lat,
      lon: suggestion.lon,
    }));
    setSearchTerm(suggestion.display_name);
    setSuggestions([]);
    setError(false);
  };

  return (
    <div className="input__wrapper">
      <div
        className={`input-container  ${error ? 'error' : ''} ${
          className ? className : ''
        }`}
      >
        <input
          type={type}
          value={value}
          name={name}
          className={`form-control ${isFilled ? 'filled' : ''} ${
            error ? 'error' : ''
          }`}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
        />

        {label && <label htmlFor={name}>{label}</label>}
        {isFilled && (
          <span className="cross-icon" onClick={handleClearInput}>
            <CloseIcon />
          </span>
        )}
      </div>
      {loading && suggestions.length === 0 && (
        <ul className="input-suggestions__list">
          <li className="input-suggestions__loading-block">
            <CircularProgress />
            <p className="input-suggestions__loading-text"> Loading...</p>
          </li>
        </ul>
      )}
      {!loading && suggestions.length > 0 && (
        <ul className="input-suggestions__list">
          {suggestions.map((suggestion) => (
            <li
              className="input-suggestions__point"
              key={suggestion.osm_id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}

      {description && <div className="input-description">{description}</div>}
    </div>
  );
};

export default AutocompleteInput;
