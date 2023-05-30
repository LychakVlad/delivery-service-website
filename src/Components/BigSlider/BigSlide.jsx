import React from 'react';
import ThirdTitle from '../ui/titles/ThirdTitle';
const BigSlide = ({ content }) => {
  return (
    <div className="big-slide">
      <div className="big-slide__img-wrapper">
        <img src={content.img} alt="client" className="big-slide__img" />
      </div>

      <ThirdTitle title={content.name} />
      <p className="big-slide__text">{content.company}</p>
      <p className="big-slide__rank">{content.role}</p>
      <p className="big-slide__text">{content.text}</p>
    </div>
  );
};

export default BigSlide;
