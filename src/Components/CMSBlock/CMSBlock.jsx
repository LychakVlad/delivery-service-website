import React from 'react';
import './CMSBlock.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Shopify from '../../assets/shopify.svg';

const CMSBlock = () => {
  return (
    <div className="cms-block">
      <div className="container">
        <SecondTitle title="Available modules" />
        <div className="cms-block__wrapper">
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
          <div className="cms-block__item">
            <div className="cms-block__img-wrapper">
              <img src={Shopify} alt="shopify" className="cms-block__img" />
            </div>
            <div className="cms-block__link">
              <a href="#1">Install</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSBlock;
