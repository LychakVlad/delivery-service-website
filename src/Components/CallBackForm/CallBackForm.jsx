import React, { useState } from 'react';
import './CallBackForm.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Input from '../form/Input/Input';
import Button from '../ui/Button';
import CheckBox from '../form/checkbox/CheckBox';

const CallBackForm = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    tel: '',
    email: '',
    isAgree1: false,
    isAgree2: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { name, tel, email, isAgree1, isAgree2 } = inputValue;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setErrors('');

    setInputValue({
      ...inputValue,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameError =
      name.length < 2 ? 'Name should be at least 2 characters long' : '';
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const emailError = !emailRegex.test(email) ? 'Invalid email address' : '';
    setErrors({ name: nameError, email: emailError });
    if (!nameError && !emailError) {
      setSubmitted(true);
      setInputValue({
        name: '',
        tel: '',
        email: '',
        isAgree1: false,
        isAgree2: false,
      });
    }
  };

  return (
    <div className="call-back">
      <div className="call-back__wrapper">
        <SecondTitle title="We're on our way" />
        <form>
          <div className="call-back__form">
            <Input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              label="How do I address you?"
              required
              error={errors.name}
            />

            <Input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              label="E-mail"
              required
              error={errors.email}
            />

            <Input
              type="tel"
              value={tel}
              onChange={handleChange}
              name="tel"
              label="Phone"
            />
            <Button onClick={handleSubmit}>Call me</Button>
            <div>
              <CheckBox
                checked={isAgree1}
                onChange={handleChange}
                name="isAgree1"
                label="I consent to the processing of personal data in accordance with the Terms of Personal Data Processing."
              />
              <CheckBox
                checked={isAgree2}
                onChange={handleChange}
                name="isAgree2"
                label="I consent to receive advertising and informational messages. "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallBackForm;
