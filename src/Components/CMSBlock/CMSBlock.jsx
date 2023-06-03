import React from 'react';
import './CMSBlock.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Shopify from '../../assets/shopify.svg';
import Woo from '../../assets/salesforce.svg';
import Sales from '../../assets/woocommerce.svg';
import Craft from '../../assets/craft.svg';
import Hubspot from '../../assets/hubspot.svg';
import Wordpress from '../../assets/wordpress.svg';

const CMSBlock = () => {
  const links = [
    {
      img: Shopify,
      href: 'https://www.shopify.com',
    },
    {
      img: Woo,
      href: 'https://www.woocommerce.com',
    },
    {
      img: Sales,
      href: 'https://www.salesforce.com',
    },
    {
      img: Wordpress,
      href: 'https://wordpress.org',
    },
    {
      img: Hubspot,
      href: 'https://www.hubspot.com',
    },
    {
      img: Craft,
      href: 'https://craftcms.com',
    },
  ];
  return (
    <div className="cms-block">
      <div className="container">
        <SecondTitle title="Available modules" />
        <div className="cms-block__wrapper">
          {links.map((link, index) => (
            <div className="cms-block__item" key={index}>
              <div className="cms-block__img-wrapper">
                <img src={link.img} alt="cms-icon" className="cms-block__img" />
              </div>
              <div className="cms-block__link">
                <a href={link.href} target="_blank" rel="noreferrer">
                  Install
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CMSBlock;
