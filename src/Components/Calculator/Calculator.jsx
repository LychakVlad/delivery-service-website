import React, { useState } from 'react';
import './Calculator.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import Box from '../../assets/box.svg';
import Input from '../form/Input/Input';
import Button from '../ui/Button';
import Toggle from '../form/toggle/Toggle';
import CalculatorItem from './CalculatorItem';
import AutocompleteInput from '../form/Input/AutocompleteInput';

const Calculator = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [error, setError] = useState(false);
  const [activeId, setActiveId] = useState(null); // track the id of the currently active item

  const handleChangeFrom = (event) => {
    setFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setTo(event.target.value);
  };

  const handleItemClick = (id) => {
    setActiveId(id);
  };

  const boxes = [
    {
      letter: 'S',
      img: Box,
      size: '1x1x1',
      weight: '10',
      id: 1,
    },
    {
      letter: 'M',
      img: Box,
      size: '2x2x2',
      weight: '20',
      id: 2,
    },
    {
      letter: 'L',
      img: Box,
      size: '3x3x3',
      weight: '30',
      id: 3,
    },
    {
      letter: 'XXL',
      img: Box,
      size: '4x4x4',
      weight: '40',
      id: 4,
    },
  ];

  return (
    <div className="calculator">
      <div className="container">
        <div className="calculator__wrapper">
          <SecondTitle title="Calculate shipping cost" />
          <div className="calculator__destination">
            <Input
              type="text"
              value={from}
              onChange={handleChangeFrom}
              name="from"
              label="From"
              required
              error={error}
              description="Washington D.C."
            />
            <Input
              type="text"
              value={to}
              onChange={handleChangeTo}
              name="to"
              label="To"
              required
              error={error}
              description="New York"
            />
            <Button>Calculate</Button>
          </div>
          <div className="calculator__size-block">
            <ThirdTitle title="Package size" />
            <div className="calculator__toggle">
              <Toggle />
            </div>
            <div className="calculator__measure">
              <Input
                type="text"
                value={to}
                onChange={handleChangeTo}
                name="to"
                label="Length, ft"
                required
                error={error}
              />
              <Input
                type="text"
                value={to}
                onChange={handleChangeTo}
                name="to"
                label="Width, ft"
                required
                error={error}
              />
              <Input
                type="text"
                value={to}
                onChange={handleChangeTo}
                name="to"
                label="Height, ft"
                required
                error={error}
              />
              <Input
                type="text"
                value={to}
                onChange={handleChangeTo}
                name="to"
                label="Weight, lb"
                required
                error={error}
              />
            </div>
            <div className="calculator__sizes">
              {boxes.map((item) => (
                <CalculatorItem
                  key={item.id}
                  settings={item}
                  active={activeId === item.id} // pass a boolean indicating whether this item is active
                  onClick={() => handleItemClick(item.id)} // pass a callback to handle item clicks
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
