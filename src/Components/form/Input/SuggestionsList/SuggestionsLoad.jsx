import React from 'react';
import './SuggestionsList.scss';
import { CircularProgress } from '@mui/material';

const SuggestionsLoad = ({ test }) => {
  return (
    <ul className="suggestions__list" data-testid={test ? test : undefined}>
      <li className="suggestions__loading-block">
        <CircularProgress />
        <p className="suggestions__loading-text"> Loading...</p>
      </li>
    </ul>
  );
};

export default SuggestionsLoad;
