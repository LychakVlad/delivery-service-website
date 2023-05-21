import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Calculator from './Calculator';
import axios from 'axios';

jest.mock('axios');

describe('Calculator', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          lat: '46.4947546',
          lon: '-87.917974',
          display_name:
            'County Road FA, Humboldt Township, Marquette County, Michigan, 49814, United States',
          osm_id: 1,
        },
        {
          lat: '40.6428112',
          lon: '-73.7597368',
          display_name:
            'FA, Eastern Road, Queens, New York, 11413, United States',
          osm_id: 2,
        },
        {
          lat: '46.89698155',
          lon: '-96.80786010019901',
          display_name:
            'FA, 17th Street North, Roosevelt/NDSU, Fargo, Cass County, North Dakota, 58105, United States',
          osm_id: 3,
        },
        {
          lat: '37.4568483',
          lon: '-77.4508542',
          display_name:
            'FA, Castlewood Road, Ampt Hill, Chesterfield County, Virginia, 23234, United States',
          osm_id: 4,
        },
      ],
    };
  });

  test('should calculate shipping cost', async () => {
    axios.get.mockResolvedValueOnce(response); // Mock the axios.get response

    render(<Calculator />);
    const input = screen.getByLabelText('To'); // Get the input field by its associated label
    fireEvent.change(input, { target: { value: 'fa' } }); // Simulate the change event with the input value

    // Wait for the suggestions to be loaded
    await waitFor(() => screen.getAllByTestId('suggestion-item'));

    const suggestions = screen.getAllByTestId('suggestion-item'); // Get the suggestion items
    expect(suggestions.length).toBe(4);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
