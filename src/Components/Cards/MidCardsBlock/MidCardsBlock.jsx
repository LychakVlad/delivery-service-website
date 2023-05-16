import React from 'react';
import './MidCardsBlock.scss';
import SecondTitle from '../../ui/titles/SecondTitle';
import Button from '../../ui/Button';
import MidCardItem from './MidCardItem';
import CardIcon from '../../../assets/card-icon.svg';

const MidCardsBlock = ({ content, withButton, link }) => {
  return (
    <div className="mid-cards">
      <div className="container">
        <div className="mid-cards__wrapper">
          <SecondTitle
            title="Three perks of your delivery"
            className="title--white"
          />
          <div className="mid-cards__block">
            {content.map((item) => (
              <MidCardItem
                title={item.title}
                button={item.button}
                img={CardIcon}
                key={item.key}
              />
            ))}
          </div>
          {withButton && (
            <div className="mid-cards__btn">
              <Button style={`button--w-272`}>Connect</Button>
            </div>
          )}
          {link && (
            <div className="mid-cards__btn-link">
              <a href="#">View documentation</a>
            </div>
          )}
        </div>
      </div>
      <div className="mid-cards__background"></div>
    </div>
  );
};

export default MidCardsBlock;
