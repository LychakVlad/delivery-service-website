import React from 'react';
import './MidCardsBlock.scss';
import ThirdTitle from '../../ui/titles/ThirdTitle';

const MidCardItem = ({ title, button, img }) => {
  return (
    <div className="mid-card-item">
      <ThirdTitle title={title} />
      <div className="mid-card-item__link">
        <a href="#">{button}</a>
      </div>
      <img src={img} alt="icon" className="mid-card-item__img" />
    </div>
  );
};

export default MidCardItem;
