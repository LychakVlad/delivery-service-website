import React from 'react';
import './MidCardsBlock.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';
import MidCardItem from './MidCardItem';
import CardIcon from '../../assets/card-icon.svg';

const MidCardsBlock = () => {
  const content = {
    first: {
      title: 'Convenience - many pickup and delivery locations',
      button: 'Check out',
    },
  };
  return (
    <div className="mid-cards">
      <div className="container">
        <div className="mid-cards__wrapper">
          <SecondTitle
            title="Three perks of your delivery"
            className="title--white"
          />
          <div className="mid-cards__block">
            <MidCardItem
              title={content.first.title}
              button={content.first.button}
              img={CardIcon}
            />
            <MidCardItem
              title={content.first.title}
              button={content.first.button}
              img={CardIcon}
            />
            <MidCardItem
              title={content.first.title}
              button={content.first.button}
              img={CardIcon}
            />
          </div>
          <div className="mid-cards__btn">
            <Button style={`button--w-272`}>Connect</Button>
          </div>
        </div>
      </div>
      <div className="mid-cards__background"></div>
    </div>
  );
};

export default MidCardsBlock;
