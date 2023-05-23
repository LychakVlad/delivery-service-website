import React from 'react';
import './Button.scss';
import { Link } from 'react-scroll';

const Button = React.memo(({ children, style, onClick, link, test }) => {
  return (
    <>
      {link && (
        <Link
          className={`button ${style} link-button`}
          to={link}
          href={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {children}
        </Link>
      )}
      {!link && (
        <button
          data-testid={test ? test : undefined}
          className={`button ${style}`}
          onClick={onClick}
        >
          <div>{children}</div>
        </button>
      )}
    </>
  );
});

export default Button;
