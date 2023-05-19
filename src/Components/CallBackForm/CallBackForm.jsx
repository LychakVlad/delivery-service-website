import React, { useState } from 'react';
import './CallBackForm.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Input from '../form/Input/Input';
import Button from '../ui/Button';
import CheckBox from '../form/checkbox/CheckBox';
import Illustration from '../../assets/big-illustration.svg';
import Modal from '../ui/modal/Modal';
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll';

const CallBackForm = ({ withImg }) => {
  const [submitted, setSubmitted] = useState(false);

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
    const checkboxError = isAgree1 ? '' : 'You must agree to the terms';
    setErrors({ name: nameError, email: emailError, checkbox: checkboxError });
    if (!nameError && !emailError && !checkboxError) {
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

  useDisableBodyScroll(submitted);

  return (
    <div
      className={`call-back ${withImg ? 'call-back--with-img' : ''} `}
      id="call-back"
    >
      <div className="container">
        <div className="call-back__wrapper">
          <div className="call-back__left">
            {' '}
            <SecondTitle title="We're on our way" />
            <form>
              <div className="call-back__form">
                <Input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  label="How do I adress you?"
                  required
                  error={errors.name}
                  test="call-name-input"
                  testError="call-error-name-input"
                />

                <Input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  label="E-mail"
                  required
                  error={errors.email}
                  test="call-email-input"
                  testError="call-error-email-input"
                />

                <Input
                  type="tel"
                  value={tel}
                  onChange={handleChange}
                  name="tel"
                  label="Phone"
                />
                <Button onClick={handleSubmit} test="call-btn">
                  Call me
                </Button>
                <div>
                  <CheckBox
                    checked={isAgree1}
                    onChange={handleChange}
                    name="isAgree1"
                    label="I consent to the processing of personal data in accordance with the Terms of Personal Data Processing."
                    required={true}
                    error={errors.checkbox}
                    test="call-checkbox"
                    testError="call-error-checkbox"
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
          <div className="call-back__right">
            {withImg && <img src={Illustration} alt="big-illustration" />}
          </div>
        </div>
      </div>
      {submitted ? <Modal onClick={setSubmitted} test="call-modal" /> : ''}
    </div>
  );
};

export default CallBackForm;
