import React from 'react';
import './SuggestionsList.scss';
import { CircularProgress } from '@mui/material';

const SuggestionsLoad = ({ test }) => {
  return (
    <ul className="suggestions__list">
      <li className="suggestions__loading-block ">
        <CircularProgress />
        <p
          className="suggestions__loading-text"
          data-testid={test ? test : undefined}
        >
          {' '}
          Loading...
        </p>
      </li>
    </ul>
  );
};

export default SuggestionsLoad;
