import React from 'react';
import './MenuList.scss';
import Illustration from '../../assets/big-illustration.jpeg';
import IllustrationW from '../../assets/big-illustration.webp';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';
import ImgWithFallback from '../ui/ImgWithFallback';

const MenuList = ({ withBG, points, title, rounded }) => {
  return (
    <div className="menu-list">
      <div className="container">
        <div
          className={`menu-list__wrapper ${
            withBG ? 'menu-list__wrapper--bg-gray' : ''
          }`}
        >
          <ImgWithFallback
            src={IllustrationW}
            fallback={Illustration}
            alt="illustration"
            className="menu-list__img"
          />

          <div className="menu-list__right">
            <SecondTitle title={title} />
            {points.map((item) => (
              <div key={Math.random()} className="menu-list__point">
                <div className="menu-list__number">{item.number}</div>
                <div className="menu-list__text">{item.text}</div>
              </div>
            ))}
            <Button style={`button--w-272`} link="call-back">
              Connect
            </Button>
          </div>
        </div>
      </div>
      {rounded && <div className="menu-list__bg"></div>}
    </div>
  );
};

export default MenuList;
