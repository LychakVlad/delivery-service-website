import React from 'react';
import './Header.scss';

const HeaderMenu = ({ open }) => {
  const links = [
    'Main',
    'Partners',
    'About',
    'Contact',
    'Widget',
    'API',
    'CMS',
  ];

  return (
    <nav className={`header__mob ${open ? 'is-active' : ''}`}>
      <ul className="header__mob-list">
        {links.map((item, index) => (
          <li className="header__mob-point" key={index}>
            {
              <a
                href={`/${item.toLocaleLowerCase()}`}
                className="header__mob-item"
                key={index}
              >
                {item}
              </a>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
