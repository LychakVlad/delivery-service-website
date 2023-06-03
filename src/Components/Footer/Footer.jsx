import React, { useEffect, useState } from 'react';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Telegram } from '../../assets/tg.svg';
import { ReactComponent as Gmail } from '../../assets/gmail.svg';
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
      link: '/privacy',
    },
  ];

  const accordionContent = [
    {
      title: 'How quickly can you deliver my package?',
      text: ' Our delivery services are designed to meet your time requirements. We offer a variety of options, including rush delivery, 3-hour delivery, 5-hour delivery, and same-day delivery. Feel free to reach out to us for specific details on each service.',
      key: 1,
    },
    {
      title: 'What factors determine the delivery fee for your services?',
      text: 'The delivery fee is determined based on several factors, such as the distance of the delivery, the type of service chosen, and the size/weight of the package. We believe in transparent pricing, so once you provide us with the necessary details, we can provide you with an accurate quote tailored to your specific requirements.',
      key: 2,
    },
    {
      title:
        'What are the size and weight limits for the packages you can deliver?',
      text: 'Our standard capacity allows us to handle packages weighing up to 70 pounds and measuring up to 72 inches in length. If you have a package that exceeds these limits, please get in touch with us so that we can explore alternative options to accommodate your specific needs.',
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
                href="https://github.com/LychakVlad"
                className="footer__social-item "
                target="_blank"
                rel="noreferrer"
                aria-label="github link"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/vladislav-lychak/"
                className="footer__social-item"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin link"
              >
                <LinkedIn />
              </a>
              <a
                href="https://t.me/Relast1"
                className="footer__social-item"
                aria-label="telegram link"
                target="_blank"
                rel="noreferrer"
              >
                <Telegram />
              </a>
              <a
                href="mailto: lycakvladislav@gmail.com"
                className="footer__social-item"
                aria-label="gmail link"
              >
                <Gmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
