import React from 'react';
import './TopMenu.scss';
import MainMenu from '../MainMenu/MainMenu';
import TrackDelivery from '../TrackDelivery/TrackDelivery';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="container">
        <div className="top-menu__wrapper">
          <MainMenu />
          <TrackDelivery />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
