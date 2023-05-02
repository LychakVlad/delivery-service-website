import React from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Footer.scss';
import Accordion from '../Accordion/Accordion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__faq">
          <h2 className="h2">FAQ</h2>
          <div className="footer__faq-block">
            <Accordion
              title="Item 1 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <Accordion
              title="Item 2 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <Accordion
              title="Item 1 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <Accordion
              title="Item 2 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <Accordion
              title="Item 1 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
            <Accordion
              title="Item 2 - Lorem ipsum dolor sit amet"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__list">
            <a href="#" className="footer__list-item">
              Country
            </a>
            <a href="#" className="footer__list-item">
              Contacts
            </a>
            <a href="#" className="footer__list-item">
              About company
            </a>
            <a href="#" className="footer__list-item">
              Private policy
            </a>
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
