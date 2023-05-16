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
    <header className={`header ${rounded ? 'header--rounded' : ''}`}>
      <div className="container">
        <div className="header__top">
          {location.pathname === '/main' ? (
            <div className="logo">Ex Drop</div>
          ) : (
            <a href="/main" className="logo">
              Ex Drop
            </a>
          )}

          <a
            href="tel:+1123-456-7890"
            className="call-icon"
            aria-label="call icon"
          >
            <CallIcon key={1} />
          </a>
        </div>
        <div className="header__bottom">
          <nav className="header-bottom-menu">
            {links.map((item, index) => (
              <a
                key={index}
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
