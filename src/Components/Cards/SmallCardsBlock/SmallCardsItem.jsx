import React from 'react';
import ThirdTitle from '../../ui/titles/ThirdTitle';

const SmallCardsItem = ({ title, img, linkText, link, position }) => {
  return !position ? (
    <div
      className={`small-card-item ${!position ? 'small-card-item--upper' : ''}`}
    >
      <img src={img} alt="icon" className="small-card-item__img" />
      <ThirdTitle title={title} />
      <a
        href={link}
        className="small-card-item__link"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </div>
  ) : (
    <div className="small-card-item">
      <ThirdTitle title={title} />
      <a
        href={link}
        className="small-card-item__link"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
      <img src={img} alt="icon" className="small-card-item__img" />
    </div>
  );
};
export default SmallCardsItem;
