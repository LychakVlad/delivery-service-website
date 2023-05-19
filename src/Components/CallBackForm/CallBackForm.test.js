import { render, screen, fireEvent } from '@testing-library/react';
import CallBackForm from './CallBackForm';

describe('Test Call Back Form', () => {
  test('Name validation', () => {
    render(<CallBackForm />);
    const btn = screen.getByTestId('call-btn');
    const inputName = screen.getByLabelText(/how do i adress you?/i);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.getByTestId('call-name-input')).toHaveValue('');
    expect(
      screen.queryByTestId('call-error-name-input')
    ).not.toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: 'V' } });
    fireEvent.click(btn);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.queryByTestId('call-error-name-input')).toBeInTheDocument();
    fireEvent.change(inputName, { target: { value: 'Vlad' } });

    fireEvent.click(btn);
    expect(
      screen.queryByTestId('call-error-name-input')
    ).not.toBeInTheDocument();
  });

  test('Email validation', () => {
    render(<CallBackForm />);
    const btn = screen.getByTestId('call-btn');
    const inputEmail = screen.getByLabelText(/e-mail/i);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.getByTestId('call-email-input')).toHaveValue('');
    expect(
      screen.queryByTestId('call-error-email-input')
    ).not.toBeInTheDocument();

    fireEvent.change(inputEmail, { target: { value: 'vladislav' } });
    fireEvent.click(btn);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.queryByTestId('call-error-email-input')).toBeInTheDocument();
    fireEvent.change(inputEmail, { target: { value: 'vladislav@gmail.com' } });
    fireEvent.click(btn);
    expect(
      screen.queryByTestId('call-error-email-input')
    ).not.toBeInTheDocument();
  });

  test('Checkbox validation', () => {
    render(<CallBackForm />);
    const btn = screen.getByTestId('call-btn');
    const checkbox = screen.getByLabelText(/I consent to the processing of/i);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(checkbox).not.toBeChecked();
    expect(screen.queryByTestId('call-error-checkbox')).not.toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.queryByTestId('call-error-checkbox')).toBeInTheDocument();

    fireEvent.click(checkbox);
    fireEvent.click(btn);
    expect(screen.queryByTestId('call-error-checkbox')).not.toBeInTheDocument();
  });

  test('Form sucsess', () => {
    render(<CallBackForm />);
    const btn = screen.getByTestId('call-btn');
    const checkbox = screen.getByLabelText(/I consent to the processing of /i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputName = screen.getByLabelText(/how do i adress you?/i);

    expect(screen.queryByTestId('call-modal')).toBeNull();
    expect(screen.getByTestId('call-email-input')).toHaveValue('');
    expect(screen.getByTestId('call-name-input')).toHaveValue('');
    expect(checkbox).not.toBeChecked();

    expect(
      screen.queryByTestId('call-error-email-input')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('call-error-name-input')
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId('call-error-checkbox')).not.toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: 'Vladislav' } });
    fireEvent.change(inputEmail, { target: { value: 'vladislav@gmail.com' } });
    fireEvent.click(checkbox);

    fireEvent.click(btn);
    expect(screen.queryByTestId('call-modal')).toBeInTheDocument();
  });
});
