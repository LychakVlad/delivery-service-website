import React from 'react';
import './BigSlider.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import BigSlide from './BigSlide';

const BigSlider = () => {
  return (
    <div className="big-slider">
      <div className="big-slider__wrapper">
        <SecondTitle title="Satisfied customers" />
        <BigSlide />
      </div>
    </div>
  );
};

export default BigSlider;
