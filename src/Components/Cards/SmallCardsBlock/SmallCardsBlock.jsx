import React from 'react';
import './SmallCardsBlock.scss';
import SecondTitle from '../../ui/titles/SecondTitle';
import SmallCardsItem from './SmallCardsItem';
import CardIcon from '../../../assets/small-illustration.svg';

const SmallCardsBlock = () => {
  const content = {
    first: {
      title: 'My Account',
      linkText: 'Read more',
    },
  };
  return (
    <div className="small-cards">
      <div className="container">
        <div className="small-cards__wrapper">
          <SecondTitle title="Easy integration" />
          <div className="small-cards__block">
            <SmallCardsItem
              title={content.first.title}
              img={CardIcon}
              linkText={content.first.linkText}
              link="#"
            />
            <SmallCardsItem
              title={content.first.title}
              img={CardIcon}
              linkText={content.first.linkText}
              link="#"
            />
            <SmallCardsItem
              title={content.first.title}
              img={CardIcon}
              linkText={content.first.linkText}
              link="#"
            />
            <SmallCardsItem
              title={content.first.title}
              img={CardIcon}
              linkText={content.first.linkText}
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardsBlock;
