import React from 'react';
import './IconsSection.scss';
import Company1 from '../../assets/company-1.svg';

const IconsSection = () => {
  return (
    <div className="icons-section">
      <div className="container">
        <div className="icons-section__wrapper">
          <img src={Company1} alt="company1" className="icons-section__icon" />
          <img src={Company1} alt="company1" className="icons-section__icon" />
          <img src={Company1} alt="company1" className="icons-section__icon" />
          <img src={Company1} alt="company1" className="icons-section__icon" />
          <img src={Company1} alt="company1" className="icons-section__icon" />
          <img src={Company1} alt="company1" className="icons-section__icon" />
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
