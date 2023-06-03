import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import './Header.scss';
import { useLocation } from 'react-router-dom';
import Dropdown from '../ui/dropdown/Dropdown';

const Header = () => {
  const [rounded, setRounded] = useState('');
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      setRounded(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const links = ['Main', 'Partners', 'About', 'Contact', 'Widgets'];

  const dropdownLinks = [
    {
      title: 'CMS',
      link: '/cms',
    },
    { title: 'API', link: '/api' },
    { title: 'Widget', link: '/widget' },
  ];

  return (
    <header className={`header ${rounded ? 'header--rounded' : ''}`}>
      <div className="container">
        <div className="header__top">
          <div className="header__left">
            {location.pathname === '/' ? (
              <div className="logo">Ex Drop</div>
            ) : (
              <a href="/" className="logo">
                Ex Drop
              </a>
            )}
            <nav className="header-bottom-menu">
              <ul className="header__nav-menu">
                {links.map((item, index) => (
                  <li className="header__nav-point" key={index}>
                    {item === 'Main' ? (
                      <a
                        href="/"
                        className={`header__bottom-menu-item ${
                          location.pathname === '/' ? 'is-active' : ''
                        }`}
                      >
                        {item}
                      </a>
                    ) : item === 'Widgets' ? (
                      <div
                        ref={ref}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        key={index}
                        className="header__nav-point"
                      >
                        <p
                          onClick={() => setDropdown((prev) => !prev)}
                          className={`header__bottom-menu-item ${
                            location.pathname === '/cms' ||
                            location.pathname === '/widget' ||
                            location.pathname === '/api'
                              ? 'is-active'
                              : ''
                          }`}
                        >
                          {item}
                          <span className="arrow-container">
                            <i className={`arrow ${dropdown ? 'rotate' : ''}`}>
                              <Arrow />
                            </i>
                          </span>
                        </p>
                        <Dropdown points={dropdownLinks} dropdown={dropdown} />
                      </div>
                    ) : (
                      <a
                        href={`/${item.toLocaleLowerCase()}`}
                        className={`header__bottom-menu-item ${
                          location.pathname === `/${item.toLocaleLowerCase()}`
                            ? 'is-active'
                            : ''
                        }`}
                        key={index}
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a
            href="tel:+1123-456-7890"
            className="call-icon"
            aria-label="call icon"
          >
            <CallIcon key={1} />
          </a>
        </div>
        <div className="header__bottom"></div>
      </div>
    </header>
  );
};

export default Header;
