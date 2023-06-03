import React from 'react';
import './Error.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Illustration from '../../assets/error-ill.png';

const ErrorBlock = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__wrapper">
          <div className="error__img-wrapper">
            <img src={Illustration} alt="error" className="error__img" />
          </div>
          <div className="error__content">
            <p className="error__404">404</p>
            <SecondTitle title="Page not found" />
            <p className="error__text">
              There is an error in the address or the page has been deleted.
            </p>
            <a href="/" className="error__link">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBlock;
