import React from 'react';

import ThirdTitle from '../../ui/titles/ThirdTitle';

const LargeCardsItem = ({ title, img, text, digit, description }) => {
  return (
    <div className="large-card-item">
      <ThirdTitle title={title} />
      <div className="large-card-item__text">{text}</div>
      <ThirdTitle title={digit} />
      <div className="large-card-item__text">{description}</div>
      <img src={img} alt="icon" className="large-card-item__img" />
      <div className="shadow"></div>
    </div>
  );
};

export default LargeCardsItem;
