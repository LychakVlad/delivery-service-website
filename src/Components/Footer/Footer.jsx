import React from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__faq">
          <h2>FAQ</h2>
          <div className="faq__item">
            <h3>Question</h3>
            <p>Answer</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__list">
            <a href="#">Country</a>
            <a href="#">Contacts</a>
            <a href="#">About company</a>
            <a href="#">Private policy</a>
          </div>
          <div className="footer__bottom-block">
            <div className="footer__logo-block">
              <div className="logo">YOUR LOGO</div>
              <p className="footer__logo-descriprion">Description</p>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-item">
                <CallIcon />
              </a>
              <a href="#" className="footer__social-item">
                <CallIcon />
              </a>
              <a href="#" className="footer__social-item">
                <CallIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
