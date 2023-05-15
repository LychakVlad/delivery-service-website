import React from 'react';
import './MenuList.scss';
import Illustration from '../../assets/big-illustration.svg';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';

const MenuList = ({ withBG, points, title, rounded }) => {
  return (
    <div className="menu-list">
      <div className="container">
        <div
          className={`menu-list__wrapper ${
            withBG ? 'menu-list__wrapper--bg-gray' : ''
          }`}
        >
          <img
            src={Illustration}
            alt="illustration"
            className="menu-list__img"
          />
          <div className="menu-list__right">
            <SecondTitle title={title} />
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
      {rounded && <div className="menu-list__bg"></div>}
    </div>
  );
};

export default MenuList;
