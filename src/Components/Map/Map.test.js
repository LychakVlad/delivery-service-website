import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Map from './Map';
import MapMenu from './MapMenu';

describe('Map', () => {
  test('renders Map component', () => {
    render(<Map />);
    const mapComponent = screen.getByTestId('map-component');
    expect(mapComponent).toBeInTheDocument();
  });

  test('toggles postOffices checkbox in MapMenu', () => {
    const setPostOffices = jest.fn();
    render(<MapMenu postOffices={false} setPostOffices={setPostOffices} />);
    const postOfficesCheckbox = screen.getByLabelText('Post Offices');
    fireEvent.click(postOfficesCheckbox);
    expect(setPostOffices).toHaveBeenCalledTimes(1);
    expect(setPostOffices).toHaveBeenCalledWith(true);
  });

  test('toggles selfPickup checkbox in MapMenu', () => {
    const setSelfPickup = jest.fn();
    render(<MapMenu selfPickup={false} setSelfPickup={setSelfPickup} />);
    const selfPickupCheckbox = screen.getByLabelText('Self-Pickup');
    fireEvent.click(selfPickupCheckbox);
    expect(setSelfPickup).toHaveBeenCalledTimes(1);
    expect(setSelfPickup).toHaveBeenCalledWith(true);
  });

  test('toggles activeTab in MapMenu', () => {
    render(<MapMenu />);
    const toggleButton = screen.getByTestId('map-toggle');
    const detailsBlock = screen.getByTestId('map-pickup');
    expect(detailsBlock).toBeInTheDocument();

    fireEvent.click(toggleButton);
    const pickupBlock = screen.getByTestId('map-details');
    expect(pickupBlock).toBeInTheDocument();
  });
});
