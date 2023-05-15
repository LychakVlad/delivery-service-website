import Button from '../ui/Button';
import FirstTitle from '../ui/titles/FirstTitle';
import './MainMenu.scss';

import React from 'react';

const MainMenuItem = ({ img, title, text, btn }) => {
  return (
    <div>
      <div className="main-menu__wrapper">
        <FirstTitle title={title} className="title--white" />
        <p className="main-menu__text">{text}</p>
        <Button style={'button--white button--w-111'}>{btn}</Button>
      </div>
      <img src={img} alt="slide-img" className="main-menu__img" />
    </div>
  );
};

export default MainMenuItem;
