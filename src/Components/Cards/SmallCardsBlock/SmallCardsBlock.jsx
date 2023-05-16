import React from 'react';
import './SmallCardsBlock.scss';
import SecondTitle from '../../ui/titles/SecondTitle';
import SmallCardsItem from './SmallCardsItem';

const SmallCardsBlock = ({ content, img, position }) => {
  return (
    <div className="small-cards">
      <div className="container">
        <div className="small-cards__wrapper">
          <SecondTitle title="Easy integration" />
          <div className="small-cards__block">
            {content.map((item, index) => (
              <SmallCardsItem
                title={item.title}
                img={img}
                linkText={item.linkText}
                link="#"
                position={position}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardsBlock;
