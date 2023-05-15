import React from 'react';
import './Rates.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import { RatesRow } from './RatesRow';
import Info from '../../assets/info.svg';
import Box from '../../assets/box-rates.svg';
import DHL from '../../assets/dhl.svg';
import FEDEX from '../../assets/fedex.svg';
import UPS from '../../assets/ups.svg';

const rowContent = [
  {
    title: '50 lbs',
    text: 'Maximum weight per box',
  },
  {
    title: '20m3',
    text: 'Maximum quantity of one order',
  },
  {
    title: '40x40x40 ft',
    text: 'Maximum size of one box',
  },
];

const includeContent = [
  {
    text: 'Transiting to the sorting center',
  },
  {
    text: 'Checking for store labels',
  },
  {
    text: 'Waiting for the product to be unloaded',
  },
];

const Rates = () => {
  return (
    <div className="rates">
      <div className="container">
        <SecondTitle title="Rates" />
        <div className="rates-wrapper">
          <div className="rates__first-column">
            <ThirdTitle title="Amazon" />
            <div className="rates__price-block">
              <p className="rates__price">From 2.99$</p>
              <p className="rates__text--fw-thin">per container</p>
            </div>
            <div className="rates__info">
              <img src={Info} alt="info" />
              <p className="rates__text--color-black">
                At the moment, only the warehouses in NYC and DC are available.
              </p>
            </div>
          </div>
          <div className="rates__second-column">
            {rowContent.map((item) => (
              <RatesRow content={item} />
            ))}
          </div>
          <div className="rates__third-column">
            <p className="rates__text--fw-thin rates__text--color-black">
              What is included in the rate:
            </p>
            {includeContent.map((item) => (
              <div className="rates__includes">
                <img src={Box} alt="icon" />
                <p className="rates__text--color-black ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rates-icons__wrapper">
          <div className="rates-icons__title">Soon we will launch</div>
          <div className="rates-icons__icons">
            <div className="rates-icons__icon">
              {' '}
              <img src={UPS} alt="ups" />
            </div>
            <div className="rates-icons__icon">
              {' '}
              <img src={DHL} alt="dhl" />
            </div>
            <div className="rates-icons__icon">
              {' '}
              <img src={FEDEX} alt="fedex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
