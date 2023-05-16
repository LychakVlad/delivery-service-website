import React from 'react';

import ThirdTitle from '../../ui/titles/ThirdTitle';

const LargeCardsItem = ({
  title,
  img,
  text,
  digit,
  description,
  icon,
  shadow,
}) => {
  return (
    <div className={`large-card-item ${img ? 'large-card-item--h-full' : ''}`}>
      {title && <ThirdTitle title={title} />}
      {text && <div className="large-card-item__text">{text}</div>}
      {digit && <ThirdTitle title={digit} />}
      {description && (
        <div className="large-card-item__text">{description}</div>
      )}
      {icon && <img src={img} alt="icon" className="large-card-item__icon" />}
      {img && <img src={img} alt="icon-img" className="large-card-item__img" />}
      {shadow ? (
        <div className="shadow"></div>
      ) : (
        <div className="secondShadow"></div>
      )}
    </div>
  );
};

export default LargeCardsItem;
