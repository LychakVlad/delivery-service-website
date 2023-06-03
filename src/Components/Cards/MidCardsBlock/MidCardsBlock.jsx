import React from 'react';
import './MidCardsBlock.scss';
import SecondTitle from '../../ui/titles/SecondTitle';
import Button from '../../ui/Button';
import MidCardItem from './MidCardItem';

const MidCardsBlock = ({ content, withButton, link, title }) => {
  return (
    <div className="mid-cards">
      <div className="container">
        <div className="mid-cards__wrapper">
          <SecondTitle title={title} className="title--white" />
          <div className="mid-cards__block">
            {content.map((item, index) => (
              <MidCardItem
                title={item.title}
                button={item.button}
                img={item.img}
                key={index}
              />
            ))}
          </div>
          {withButton && (
            <div className="mid-cards__btn">
              <Button style={`button--w-272`} link="call-back">
                Connect
              </Button>
            </div>
          )}
          {link && (
            <div className="mid-cards__btn-link">
              <a
                href="https://web.postman.co/"
                target="_blank"
                rel="noreferrer"
                aria-label="api link"
              >
                View documentation
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mid-cards__background"></div>
    </div>
  );
};

export default MidCardsBlock;
