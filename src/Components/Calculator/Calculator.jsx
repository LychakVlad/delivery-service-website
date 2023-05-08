import React, { useState } from 'react';
import './Calculator.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import Box from '../../assets/box.svg';
import Icon from '../../assets/calc-icon.svg';
import Input from '../form/Input/Input';
import Button from '../ui/Button';
import Toggle from '../form/toggle/Toggle';
import CalculatorItem from './CalculatorItem';
import AutocompleteInput from '../form/Input/AutocompleteInput';
import { CalcDistance } from './CalcDistance';

const Calculator = () => {
  const [error, setError] = useState(false);
  const [errorFrom, setErrorFrom] = useState(false);
  const [errorTo, setErrorTo] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState('sizes');
  const [showTotal, setShowTotal] = useState(false);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [calcItemError, setCalcItemError] = useState(false);
  const [coordsFrom, setCoordsFrom] = useState({ lat: '', lon: '' });
  const [coordsTo, setCoordsTo] = useState({ lat: '', lon: '' });
  const [prices, setPrices] = useState({ first: '', second: '', third: '' });
  const [timeToDelivery, setTimeToDelivery] = useState({
    office: '',
    pickup: '',
    courier: '',
  });

  const handleChangeFrom = (event) => {
    setCityFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setCityTo(event.target.value);
  };

  const handleSetLength = (event) => {
    setLength(event.target.value);
  };

  const handleSetWidth = (event) => {
    setWidth(event.target.value);
  };

  const handleSetHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleSetWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleItemClick = (id) => {
    setActiveId(id);
    setCalcItemError(false);

    setLength(boxes[id - 1].valueSize[0]);
    setWidth(boxes[id - 1].valueSize[1]);
    setHeight(boxes[id - 1].valueSize[2]);
    setWeight(boxes[id - 1].valueSize[3]);
  };

  const handleToggle = () => {
    setActiveTab(activeTab === 'sizes' ? 'measure' : 'sizes');
    setActiveId(null);
    setShowTotal(false);
  };

  const handleCalculate = () => {
    const distance = Math.ceil(
      CalcDistance(coordsFrom.lat, coordsFrom.lon, coordsTo.lat, coordsTo.lon)
    );

    const officeTime = Math.ceil(distance / 100);
    const pickupTime = Math.ceil(distance / 250);
    const courierTime = Math.ceil(distance / 500);

    setTimeToDelivery({
      office: `${officeTime}`,
      pickup: `${pickupTime}`,
      courier: `${courierTime}`,
    });

    const volume = length * width * height;
    const rate = weight / volume;

    const basePrice = weight <= 10 ? 15 : 5;
    const distancePrice = weight * rate * distance * 0.01;
    const distanceFee = distance <= 50 ? 5 : 0;

    const firstPrice = basePrice + distancePrice + distanceFee;
    const secondPrice = basePrice * 2.2 + distancePrice + distanceFee;
    const thirdPrice = basePrice * 2.4 + distancePrice + distanceFee;

    setPrices({
      first: `${firstPrice.toFixed(2)}`,
      second: `${secondPrice.toFixed(2)}`,
      third: `${thirdPrice.toFixed(2)}`,
    });

    if (!cityFrom) {
      setError(true);
    }

    if (activeId === null) {
      setCalcItemError(true);
    } else {
      setShowTotal(true);
    }
  };

  const boxes = [
    {
      letter: 'S',
      img: Box,
      size: '10x10x10',
      weight: '20',
      id: 1,
      valueSize: [10, 10, 10, 20],
    },
    {
      letter: 'M',
      img: Box,
      size: '20x20x20',
      weight: '40',
      id: 2,
      valueSize: [20, 20, 20, 40],
    },
    {
      letter: 'L',
      img: Box,
      size: '30x30x30',
      weight: '60',
      id: 3,
      valueSize: [30, 30, 30, 60],
    },
    {
      letter: 'XXL',
      img: Box,
      size: '40x40x40',
      weight: '100',
      id: 4,
      valueSize: [40, 40, 40, 100],
    },
  ];

  return (
    <div className="calculator">
      <div className="container">
        <div className="calculator__wrapper">
          <SecondTitle title="Calculate shipping cost" />
          <div className="calculator__destination">
            <AutocompleteInput
              type="text"
              value={cityFrom}
              onChange={handleChangeFrom}
              name="from"
              label="From"
              required
              error={errorFrom}
              setError={setErrorFrom}
              setSearchTerm={setCityFrom}
              description="Washington D.C."
              setCoords={setCoordsFrom}
            />
            <AutocompleteInput
              type="text"
              value={cityTo}
              onChange={handleChangeTo}
              name="to"
              label="To"
              required
              error={errorTo}
              setError={setErrorTo}
              setSearchTerm={setCityTo}
              description="New York"
              setCoords={setCoordsTo}
            />
            <Button onClick={handleCalculate}>Calculate</Button>
          </div>

          <div className="calculator__size-block">
            <ThirdTitle title="Package size" />
            <div className="calculator__toggle">
              <Toggle clickHandle={handleToggle} />
            </div>
            {activeTab === 'measure' && (
              <div className="calculator__measure">
                <Input
                  type="text"
                  value={length}
                  onChange={handleSetLength}
                  name="length"
                  label="Length, ft"
                  required
                  error={error}
                />
                <Input
                  type="text"
                  value={width}
                  onChange={handleSetWidth}
                  name="width"
                  label="Width, ft"
                  required
                  error={error}
                />
                <Input
                  type="text"
                  value={height}
                  onChange={handleSetHeight}
                  name="height"
                  label="Height, ft"
                  required
                  error={error}
                />
                <Input
                  type="text"
                  value={weight}
                  onChange={handleSetWeight}
                  name="weight"
                  label="Weight, lb"
                  required
                  error={error}
                />
              </div>
            )}
            {activeTab === 'sizes' && (
              <div className="calculator__sizes">
                {boxes.map((item) => (
                  <CalculatorItem
                    key={item.id}
                    settings={item}
                    active={activeId === item.id}
                    onClick={() => handleItemClick(item.id)}
                    calcItemError={calcItemError}
                  />
                ))}
              </div>
            )}
            {showTotal && (
              <div className="calculator__total">
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
                    <li className="calculator__total-plan-point">
                      Notifying recipients
                    </li>
                    <li className="calculator__total-plan-point">
                      Receiving orders at sorting centers and delivery points
                    </li>
                    <li className="calculator__total-plan-point">
                      Checking completeness
                    </li>
                    <li className="calculator__total-plan-point">
                      Weekend delivery
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
