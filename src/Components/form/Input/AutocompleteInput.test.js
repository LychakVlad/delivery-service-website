import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AutocompleteInput from './AutocompleteInput';

jest.mock('axios');

describe('AutocompleteInput', () => {
  test('renders without errors', () => {
    render(<AutocompleteInput />);
    expect(screen.getByTestId('autocomplete-input')).toBeInTheDocument();
  });
});
