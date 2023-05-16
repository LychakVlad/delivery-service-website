import React from 'react';
import SecondTitle from '../../ui/titles/SecondTitle';
import LargeCardsItem from './LargeCardsItem';
import './LargeCardsBlock.scss';

const LargeCardsBlock = ({ content, title }) => {
  return (
    <div className="large-cards">
      <div className="container">
        <div className="large-cards__wrapper">
          <SecondTitle title={title} />
          <div className="large-cards__block">
            {content.map((item) => (
              <LargeCardsItem
                title={item.title}
                img={item.img}
                description={item.description}
                icon={item.icon}
                text={item.text}
                digit={item.digit}
                shadow={item.shadow}
                key={item.key}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCardsBlock;
