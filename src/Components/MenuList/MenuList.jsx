import React from 'react';
import './MenuList.scss';
import Illustration from '../../assets/big-illustration.svg';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';

const MenuList = () => {
  const points = [
    {
      number: 1,
      text: 'Register and sign the offer online',
    },
    {
      number: 2,
      text: 'Create an order through a personal account, API or module',
    },
    {
      number: 3,
      text: 'Bring the parcel to the collection point or give it to the courier',
    },
  ];

  return (
    <div className="menu-list">
      <div className="container">
        <div className="menu-list__wrapper">
          <img
            src={Illustration}
            alt="illustration"
            className="menu-list__img"
          />
          <div className="menu-list__right">
            <SecondTitle title="Quick Start" />
            {points.map((item) => (
              <div className="menu-list__point">
                <div className="menu-list__number">{item.number}</div>
                <div className="menu-list__text">{item.text}</div>
              </div>
            ))}
            <Button style={`button--w-272`}>Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
