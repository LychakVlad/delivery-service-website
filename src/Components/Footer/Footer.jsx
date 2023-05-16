import React, { useEffect, useState } from 'react';
import { ReactComponent as CallIcon } from '../../assets/call-icon.svg';
import './Footer.scss';
import Accordion from '../Accordion/Accordion';
import SecondTitle from '../ui/titles/SecondTitle';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [withoutFaq, setWithoutFaq] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contact') {
      setWithoutFaq(true);
    }
  }, [location.pathname]);

  const footerLinks = [
    {
      text: 'About company',
      link: '/about',
    },
    {
      text: 'Contacts',
      link: '/contact',
    },
    {
      text: 'Private policy',
      link: '/private',
    },
  ];

  const accordionContent = [
    {
      title: 'How quickly can you deliver my package?',
      text: 'We offer a range of delivery services including rush, 3 hour, 5 hour, and same day delivery. Contact us for details.',
      key: 1,
    },
    {
      title: 'What is the delivery fee for your services?',
      text: 'The delivery fee depends on factors such as distance, service type, and package size/weight. We provide transparent pricing and can provide a quote based on the details you provide.',
      key: 2,
    },
    {
      title: 'What is the maximum weight and size of package you can deliver?',
      text: 'We can typically accommodate packages up to 70 pounds and 72 inches in length. Contact us to discuss options if your package exceeds these limits.',
      key: 3,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {!withoutFaq && (
          <div className="footer__faq">
            <SecondTitle title="FAQ" />
            <Accordion content={accordionContent} />
          </div>
        )}
        <div className="footer__bottom">
          <div
            className={`footer__list ${
              withoutFaq ? 'footer__list--no-margin' : ''
            }`}
          >
            {footerLinks.map((item, index) => (
              <a key={index} href={item.link} className="footer__list-item">
                {item.text}
              </a>
            ))}
          </div>
          <div className="footer__bottom-block">
            <div className="footer__logo-block">
              {location.pathname === '/main' ? (
                <div className="logo logo--footer">Ex Drop</div>
              ) : (
                <a href="/main" className="logo logo--footer">
                  Ex Drop
                </a>
              )}
              <p className="footer__logo-descriprion">Ex Drop LLC.</p>
              <p className="footer__logo-descriprion">All rights reserved</p>
            </div>
            <div className="footer__social">
              <a
                href="#1"
                className="footer__social-item "
                aria-label="github link"
              >
                <CallIcon />
              </a>
              <a
                href="#2"
                className="footer__social-item"
                aria-label="gmail link"
              >
                <CallIcon />
              </a>
              <a
                href="#3"
                className="footer__social-item"
                aria-label="telegram link"
              >
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
