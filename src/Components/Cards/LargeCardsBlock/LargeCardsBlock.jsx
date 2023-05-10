import React from 'react';
import SecondTitle from '../../ui/titles/SecondTitle';
import LargeCardsItem from './LargeCardsItem';
import CardIcon from '../../../assets/delivery-illustration.svg';
import './LargeCardsBlock.scss';

const LargeCardsBlock = () => {
  const content = {
    first: {
      title: 'Safe delivery ',
      text: 'Profitable parcel insurance',
      digit: '0.3%',
      description: 'Of the cost of goods',
    },
  };
  return (
    <div className="large-cards">
      <div className="container">
        <div className="large-cards__wrapper">
          <SecondTitle title="More perks" />
          <div className="large-cards__block">
            <LargeCardsItem
              title={content.first.title}
              img={CardIcon}
              text={content.first.text}
              digit={content.first.digit}
              description={content.first.description}
            />
            <LargeCardsItem
              title={content.first.title}
              img={CardIcon}
              text={content.first.text}
              digit={content.first.digit}
              description={content.first.description}
            />
            <LargeCardsItem
              title={content.first.title}
              img={CardIcon}
              text={content.first.text}
              digit={content.first.digit}
              description={content.first.description}
            />
            <LargeCardsItem
              title={content.first.title}
              img={CardIcon}
              text={content.first.text}
              digit={content.first.digit}
              description={content.first.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCardsBlock;
