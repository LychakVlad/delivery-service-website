import React, { useState } from 'react';
import './Calculator.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import Icon from '../../assets/calc-icon.svg';
import Button from '../ui/Button';
import Toggle from '../form/toggle/Toggle';
import CalculatorItem from './CalculatorItem';
import AutocompleteInput from '../form/Input/AutocompleteInput';
import { CalcDistance } from './CalcDistance';
import TotalSection from './TotalSection';
import CalculatorValues from './CalculatorValues';
import boxes from './BoxesData';

const Calculator = () => {
  const [errorFrom, setErrorFrom] = useState(false);
  const [errorTo, setErrorTo] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState('sizes');
  const [showTotal, setShowTotal] = useState(false);
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
  const [errorValue, setErrorValue] = useState({
    length: false,
    width: false,
    height: false,
    weight: false,
  });
  const [packageValue, setPackageValue] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
  });

  const handleChangeFrom = (event) => {
    setCityFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setCityTo(event.target.value);
  };

  const handleSetPackageValue = (event, key) => {
    const value = event.target.value;

    setPackageValue((prevState) => ({ ...prevState, [key]: value }));

    setErrorValue((prevState) => ({
      ...prevState,
      [key]: !!(errorValue[key] && value),
    }));
  };

  const handleItemClick = (id) => {
    setActiveId(id);
    setCalcItemError(false);

    setPackageValue({
      length: boxes[id - 1].valueSize[0],
      width: boxes[id - 1].valueSize[1],
      height: boxes[id - 1].valueSize[2],
      weight: boxes[id - 1].valueSize[3],
    });
  };

  const handleToggle = () => {
    setActiveTab(activeTab === 'sizes' ? 'measure' : 'sizes');
    setPackageValue({
      length: '',
      width: '',
      height: '',
      weight: '',
    });
    setCalcItemError(false);
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

    const volume =
      packageValue.length * packageValue.width * packageValue.height;
    const rate = packageValue.weight / volume;

    const basePrice = packageValue.weight <= 10 ? 15 : 5;
    const distancePrice = packageValue.weight * rate * distance * 0.01;
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
      setErrorFrom(true);
    }

    if (!cityTo) {
      setErrorTo(true);
    }

    if (activeTab === 'sizes') {
      if (activeId === null) {
        setCalcItemError(true);
      }

      if (
        activeId === null ||
        errorFrom ||
        errorTo ||
        cityFrom === '' ||
        cityTo === ''
      ) {
        setShowTotal(false);
      } else {
        setShowTotal(true);
      }
    }

    if (activeTab === 'measure') {
      const validationRules = [
        { name: 'length', value: packageValue.length },
        { name: 'width', value: packageValue.width },
        { name: 'height', value: packageValue.height },
        { name: 'weight', value: packageValue.weight },
      ];

      let hasErrors = false;
      validationRules.forEach((rule) => {
        if (!rule.value) {
          setErrorValue((prevState) => ({ ...prevState, [rule.name]: true }));
          hasErrors = true;
        } else {
          setErrorValue((prevState) => ({ ...prevState, [rule.name]: false }));
        }
      });

      if (
        errorFrom ||
        errorTo ||
        hasErrors ||
        cityFrom === '' ||
        cityTo === ''
      ) {
        setShowTotal(false);
      } else {
        setShowTotal(true);
      }
    }
  };

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
          </div>

          <div className="calculator__size-block">
            <ThirdTitle title="Package size" />
            <div className="calculator__toggle">
              <Toggle
                clickHandle={handleToggle}
                firstTitle="Estimated"
                secondTitle="Exactly"
              />
            </div>
            {activeTab === 'measure' && (
              <CalculatorValues
                packageValue={packageValue}
                errorValue={errorValue}
                handleSetPackageValue={handleSetPackageValue}
              />
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
            <Button onClick={handleCalculate} style="button--w-272">
              Calculate
            </Button>
            {showTotal && (
              <TotalSection
                Icon={Icon}
                timeToDelivery={timeToDelivery}
                prices={prices}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
