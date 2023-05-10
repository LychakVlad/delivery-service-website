import React from 'react';
import ThirdTitle from '../../ui/titles/ThirdTitle';

const SmallCardsItem = ({ title, img, linkText, link }) => {
  return (
    <div className="small-card-item">
      <ThirdTitle title={title} />
      <a href={link} className="small-card-item__link">
        {linkText}
      </a>
      <img src={img} alt="icon" className="small-card-item__img" />
    </div>
  );
};
export default SmallCardsItem;
