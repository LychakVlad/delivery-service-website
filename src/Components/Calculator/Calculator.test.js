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

  test('should render the Calculator component correctly', () => {
    render(<Calculator />);
    const fromInput = screen.getByLabelText('From');
    const toInput = screen.getByLabelText('To');
    const calculateButton = screen.getByRole('button', { name: /calculate/i });

    expect(fromInput).toBeInTheDocument();
    expect(toInput).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  test('should clear input value when clear icon is clicked', async () => {
    render(<Calculator />);
    const input = screen.getByTestId('autocomplete-input-to');

    fireEvent.change(input, { target: { value: 'fa' } });
    fireEvent.click(screen.getByTestId('clear-icon-to'));

    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });

  test('should select a suggestion when clicked', async () => {
    axios.get.mockResolvedValueOnce(response);

    render(<Calculator />);
    const input = screen.getByLabelText('To');

    fireEvent.change(input, { target: { value: 'fa' } });

    await waitFor(() => {
      const suggestionItems = screen.getAllByTestId('suggestion-item');
      fireEvent.click(suggestionItems[0]);

      expect(input.value).toBe(response.data[0].display_name);
      expect(screen.queryAllByTestId('suggestion-item')).toHaveLength(0);
    });
  });

  test('should update the "from" input value correctly', () => {
    render(<Calculator />);
    const fromInput = screen.getByLabelText('From');
    const newValue = 'New York';

    fireEvent.change(fromInput, { target: { value: newValue } });

    expect(fromInput.value).toBe(newValue);
  });

  test('should update the "to" input value correctly', () => {
    render(<Calculator />);
    const toInput = screen.getByLabelText('To');
    const newValue = 'Los Angeles';

    fireEvent.change(toInput, { target: { value: newValue } });

    expect(toInput.value).toBe(newValue);
  });

  test('should show the total section when the calculate button is clicked and conditions are met based on active tab', () => {
    render(<Calculator />);

    const fromInput = screen.getByLabelText('From');
    const toInput = screen.getByLabelText('To');
    const calculateButton = screen.getByRole('button', { name: /calculate/i });

    fireEvent.change(fromInput, { target: { value: 'New York' } });
    fireEvent.change(toInput, { target: { value: 'Los Angeles' } });
    fireEvent.click(calculateButton);

    const totalSection = screen.queryByTestId('total-section');
    expect(totalSection).not.toBeInTheDocument();

    const calculatorItem = screen.getByText('S');
    fireEvent.click(calculatorItem);
    expect(totalSection).not.toBeInTheDocument();

    fireEvent.click(calculateButton);
    expect(screen.queryByTestId('total-section')).toBeInTheDocument();

    const measureTab = screen.getByText('Exactly');
    fireEvent.click(measureTab);
    expect(totalSection).not.toBeInTheDocument();

    const lengthInput = screen.getByLabelText('Length, ft');
    const widthInput = screen.getByLabelText('Width, ft');
    const heightInput = screen.getByLabelText('Height, ft');
    const weightInput = screen.getByLabelText('Weight, lb');

    fireEvent.change(lengthInput, { target: { value: '3' } });
    fireEvent.change(widthInput, { target: { value: '4' } });
    fireEvent.change(heightInput, { target: { value: '5' } });
    fireEvent.change(weightInput, { target: { value: '10' } });

    fireEvent.click(calculateButton);
    expect(screen.queryByTestId('total-section')).toBeInTheDocument();

    const sizesTab = screen.getByText('Estimated');
    fireEvent.click(sizesTab);
    expect(totalSection).not.toBeInTheDocument();
  });
});
