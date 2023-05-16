import React, { useEffect, useState } from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Header.scss';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [rounded, setRounded] = useState('');
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      setRounded(true);
    }
  }, [location.pathname]);

  const links = ['Main', 'XDoc', 'Widget', 'CMS', 'API', 'About', 'Contact'];

  return (
    <div className={`header ${rounded ? 'header--rounded' : ''}`}>
      <div className="container">
        <div className="header__top">
          <div className="header__top-left">
            {location.pathname === '/main' ? (
              <div className="logo">Ex Drop</div>
            ) : (
              <a href="/main" className="logo">
                Ex Drop
              </a>
            )}
          </div>
          <div className="header__top-right">
            <a href="#1" className="call-icon">
              <CallIcon key={1} />
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header-bottom-menu">
            {links.map((item) => (
              <a
                href={`/${item.toLocaleLowerCase()}`}
                className={`header__bottom-menu-item ${
                  location.pathname === `/${item.toLocaleLowerCase()}`
                    ? 'is-active'
                    : ''
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
