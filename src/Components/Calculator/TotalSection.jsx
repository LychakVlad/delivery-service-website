import React from 'react';
import ThirdTitle from '../ui/titles/ThirdTitle';

function TotalSection({ Icon, timeToDelivery, prices, test }) {
  return (
    <div className="calculator__total" data-testid={test ? test : undefined}>
      <div className="calculator__time">
        <div className="calculator__time-option">
          <img src={Icon} alt="icon" />
          <div className="calculator__time-right">
            <p className="calculator__time-text">Post Office</p>
            <p className="calculator__time-days">
              Est. {timeToDelivery.office} days
            </p>
          </div>
        </div>
        <div className="calculator__time-option">
          <img src={Icon} alt="icon" />
          <div className="calculator__time-right">
            <p className="calculator__time-text">Pickup point</p>
            <p className="calculator__time-days">
              Est. {timeToDelivery.pickup} days
            </p>
          </div>
        </div>
        <div className="calculator__time-option">
          <img src={Icon} alt="icon" />
          <div className="calculator__time-right">
            <p className="calculator__time-text">By courier</p>
            <p className="calculator__time-days">
              Est. {timeToDelivery.courier} days
            </p>
          </div>
        </div>
      </div>
      <div className="calculator__total-price-block">
        <p className="calculator__total-price">{prices.first}$</p>
        <p className="calculator__total-price">{prices.second}$</p>
        <p className="calculator__total-price">{prices.third}$</p>
      </div>
      <div className="calculator__total-plan">
        <ThirdTitle title="What is included in the rate:" />
        <ul className="calculator__total-plan-list">
          <li className="calculator__total-plan-point">Notifying recipients</li>
          <li className="calculator__total-plan-point">
            Receiving orders at sorting centers and delivery points
          </li>
          <li className="calculator__total-plan-point">
            Checking completeness
          </li>
          <li className="calculator__total-plan-point">Weekend delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default TotalSection;
