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
  const { name, tel, email, isAgree1, isAgree2 } = inputValue;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputValue({
      ...inputValue,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="call-back">
      <div className="call-back__wrapper">
        <SecondTitle title="We're on our way" />
        <form onSubmit={handleSubmit}>
          <div className="call-back__form">
            <Input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              label="How do I address you?"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              label="E-mail"
            />
            <Input
              type="tel"
              value={tel}
              onChange={handleChange}
              name="tel"
              label="Phone"
            />
            <Button>Call me</Button>
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
