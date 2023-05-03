import React, { useState } from 'react';
import './CallBackForm.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Input from '../form/Input/Input';

const CallBackForm = () => {
  const [inputValue, setInputValue] = useState({ name: '', price: '' });
  const { name, tel, email } = inputValue;

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <div className="call-back">
      <div className="call-back__wrapper">
        <SecondTitle title="We're on our way" />
        <form>
          <Input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            label="How do I address you?"
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
            label="Telephone"
          />
        </form>
      </div>
    </div>
  );
};

export default CallBackForm;
