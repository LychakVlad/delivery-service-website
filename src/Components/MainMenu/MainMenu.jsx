import React from 'react';
import './MainMenu.scss';
import FirstTitle from '../ui/titles/FirstTitle';
import Button from '../ui/Button';
import slide1 from '../../assets/slide1.jpg';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="main-menu__wrapper">
        <FirstTitle
          title="Delivery service for online stores"
          className="title--white"
        />
        <p className="main-menu__text">
          Develop your business, and we'll bring the orders
        </p>
        <Button style={'button--white button--w-111'}>Connect</Button>
      </div>

      <img src={slide1} alt="slide-img" className="main-menu__img" />
    </div>
  );
};

export default MainMenu;
