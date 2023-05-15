import React from 'react';
import './Rates.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import { RatesRow } from './RatesRow';

const rowContent = [
  {
    title: '50lbs',
    text: 'Maximum weight per box',
  },
  {
    title: '20m3',
    text: 'Maximum quantity of one order',
  },
  {
    title: '40x40x40ft',
    text: 'Maximum size of one box',
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
            <div className="rates__alert">
              <img src="" alt="" />
              <p className="rates__text--color-black">
                At the moment, only the warehouses in New York and Washington,
                DC are available.
              </p>
            </div>
          </div>
          <div className="rates__second-column">
            {rowContent.map((item) => (
              <RatesRow content={item} />
            ))}
          </div>
          <div className="rates__third-column"></div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
