import React from 'react';

const CalculatorItem = ({ key, settings, active, onClick, calcItemError }) => {
  return (
    <div
      id={key}
      className={`calculator__size ${active ? 'is-active' : ''} ${
        calcItemError ? 'is-error' : ''
      } `}
      onClick={onClick}
    >
      <div className="calculator__size-top">
        <p className="calculator__size-title">{settings.letter}</p>
        <img
          src={settings.img}
          alt="box-icon"
          className="calculator__size-icon"
        />
      </div>
      <div className="calculator__size-bottom">
        <p className="calculator__size-size">{settings.size} ft</p>
        <p className="calculator__size-weight">{settings.weight} lbs</p>
      </div>
    </div>
  );
};

export default CalculatorItem;
