import { render, screen, fireEvent } from '@testing-library/react';
import TrackDelivery from './TrackDelivery';

describe('Test Delivery Track', () => {
  test('Submit reject', () => {
    render(<TrackDelivery />);
    const btn = screen.getByTestId('delivery-btn');
    const input = screen.getByLabelText(/track/i);
    expect(screen.queryByTestId('delivery-modal')).toBeNull();
    expect(screen.getByTestId('delivery-input')).toHaveValue('');
    expect(screen.queryByTestId('delivery-error')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(btn);
    expect(screen.queryByTestId('delivery-modal')).toBeNull();
    expect(screen.queryByTestId('delivery-error')).toBeInTheDocument();
  });

  test('Submit success', () => {
    render(<TrackDelivery />);
    const btn = screen.getByTestId('delivery-btn');
    const input = screen.getByLabelText(/track/i);
    expect(screen.queryByTestId('delivery-modal')).toBeNull();
    expect(screen.getByTestId('delivery-input')).toHaveValue('');
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(btn);
    expect(screen.queryByTestId('delivery-modal')).toBeInTheDocument();
    expect(screen.queryByTestId('delivery-error')).not.toBeInTheDocument();
  });
});
