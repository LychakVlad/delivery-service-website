import React from 'react';
import './MidCardsBlock.scss';
import ThirdTitle from '../../ui/titles/ThirdTitle';

const MidCardItem = ({ title, button, img }) => {
  return (
    <div className="mid-card-item">
      <ThirdTitle title={title} />
      {button && (
        <div className="mid-card-item__link">
          <a href="#1">{button}</a>
        </div>
      )}
      {img && (
        <img
          src={img}
          alt="icon"
          className="mid-card-item__img"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default MidCardItem;
