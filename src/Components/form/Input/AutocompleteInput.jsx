import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useDebounce from '../../../hooks/useDebounce';
import { fetchCities } from '../../../api/fetchCities';
import SuggestionsList from './SuggestionsList/SuggestionsList';
import SuggestionsLoad from './SuggestionsList/SuggestionsLoad';

const AutocompleteInput = ({
  value,
  label,
  name,
  placeholder,
  type,
  required,
  error = false,
  setError = () => {},
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

  const handleSearch = useDebounce((searchTerm) => {
    if (searchTerm.length > 0) {
      setLoading(true);
      fetchCities(searchTerm)
        .then((response) => {
          console.log(response.data);
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
  }, 500);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    handleSearch(searchTerm);
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
          id={name}
          className={`form-control ${isFilled ? 'filled' : ''} ${
            error ? 'error' : ''
          }`}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          data-testid={`autocomplete-input-${name}`}
        />

        {label && <label htmlFor={name}>{label}</label>}
        {isFilled && (
          <span className="cross-icon" onClick={handleClearInput}>
            <CloseIcon />
          </span>
        )}
      </div>
      {loading && suggestions.length === 0 && (
        <SuggestionsLoad test="loading-icon" />
      )}
      {!loading && suggestions.length > 0 && (
        <SuggestionsList
          suggestions={suggestions}
          handleSelect={handleSelect}
          test="suggestion-item"
        />
      )}

      {description && <div className="input-description">{description}</div>}
    </div>
  );
};

export default AutocompleteInput;
