import React from 'react';
import './Button.scss';
import { Link } from 'react-scroll';

const Button = ({ children, style, onClick, link }) => {
  return (
    <>
      {link && (
        <Link
          className={`button ${style}`}
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="link-button">{children}</div>
        </Link>
      )}
      {!link && (
        <button className={`button ${style}`} onClick={onClick}>
          <div>{children}</div>
        </button>
      )}
    </>
  );
};

export default Button;
