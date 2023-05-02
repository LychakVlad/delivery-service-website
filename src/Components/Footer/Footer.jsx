import React from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Footer.scss';
import Accordion from '../Accordion/Accordion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__faq">
          <h2>FAQ</h2>
          <Accordion
            title="Item 1 - Lorem ipsum dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <Accordion
            title="Item 2 - Lorem ipsum dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
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
