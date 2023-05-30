import React from 'react';
import './IconsSection.scss';
import amazonIcon from '../../assets/amazon.svg';

const IconsSection = () => {
  return (
    <div className="icons-section">
      <div className="container">
        <div className="icons-section__wrapper">
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
          <img src={amazonIcon} className="icons-section__icon" alt="Amazon" />
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
