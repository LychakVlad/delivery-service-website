import React, { useCallback, useState } from 'react';
import './Calculator.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import ThirdTitle from '../ui/titles/ThirdTitle';
import Icon from '../../assets/calc-icon.svg';
import Button from '../ui/Button';
import Toggle from '../form/toggle/Toggle';
import CalculatorItem from './CalculatorItem';
import AutocompleteInput from '../form/Input/AutocompleteInput';
import TotalSection from './TotalSection';
import CalculatorValues from './CalculatorValues';
import boxes from './BoxesData';
import CalcCost from './CalcCost';

const Calculator = React.memo(() => {
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

  const handleChangeFrom = useCallback((event) => {
    setCityFrom(event.target.value);
  }, []);
  const handleChangeTo = useCallback((event) => {
    setCityTo(event.target.value);
  }, []);

  const handleSetPackageValue = useCallback(
    (event, key) => {
      const value = event.target.value;

      setPackageValue((prevState) => ({ ...prevState, [key]: value }));

      setErrorValue((prevState) => ({
        ...prevState,
        [key]: !!(errorValue[key] && value),
      }));
    },
    [errorValue]
  );

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

  const handleToggle = useCallback(() => {
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
  }, [activeTab]);

  const handleCalculateButtonClick = () => {
    CalcCost(
      cityFrom,
      cityTo,
      activeTab,
      activeId,
      setErrorFrom,
      errorFrom,
      setErrorTo,
      errorTo,
      setCalcItemError,
      setShowTotal,
      setPackageValue,
      setPrices,
      setTimeToDelivery,
      setErrorValue,
      packageValue,
      coordsFrom,
      coordsTo
    );
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
                    key={item.key}
                    settings={item}
                    active={activeId === item.id}
                    onClick={() => handleItemClick(item.id)}
                    calcItemError={calcItemError}
                  />
                ))}
              </div>
            )}
            <Button
              onClick={handleCalculateButtonClick}
              style={`button--w-272`}
            >
              Calculate
            </Button>
            {showTotal && (
              <TotalSection
                Icon={Icon}
                timeToDelivery={timeToDelivery}
                prices={prices}
                test="total-section"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Calculator;
