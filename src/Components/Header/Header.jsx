import React from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Header.scss';

const Header = ({ rounded }) => {
  return (
    <div className={`header ${rounded ? 'header--rounded' : ''}`}>
      <div className="container">
        <div className="header__top">
          <div className="header__top-left">
            <div className="logo">Ex Drop</div>
            <div className="header__top-menu">
              <a href="#1" className="header__top-menu-item">
                For e-commerce
              </a>
              <a href="#1" className="header__top-menu-item">
                For partners
              </a>
            </div>
          </div>
          <div className="header__top-right">
            <a href="#1" className="call-icon">
              <CallIcon />
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header-bottom-menu">
            <a href="#1" className="header__bottom-menu-item is-active">
              Main page
            </a>
            <a href="#1" className="header__bottom-menu-item">
              Sales
            </a>
            <a href="#1" className="header__bottom-menu-item">
              News
            </a>
            <a href="#1" className="header__bottom-menu-item">
              Integrations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
