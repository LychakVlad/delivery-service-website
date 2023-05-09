import React from 'react';
import Input from '../form/Input/Input';

const CalculatorValues = ({
  packageValue,
  errorValue,
  handleSetPackageValue,
}) => {
  return (
    <div className="calculator__measure">
      <Input
        type="number"
        value={packageValue.length}
        onChange={(event) => handleSetPackageValue(event, 'length')}
        name="length"
        label="Length, ft"
        required
        error={errorValue.length}
      />
      <Input
        type="number"
        value={packageValue.width}
        onChange={(event) => handleSetPackageValue(event, 'width')}
        name="width"
        label="Width, ft"
        required
        error={errorValue.width}
      />
      <Input
        type="number"
        value={packageValue.height}
        onChange={(event) => handleSetPackageValue(event, 'height')}
        name="height"
        label="Height, ft"
        required
        error={errorValue.height}
      />
      <Input
        type="number"
        value={packageValue.weight}
        onChange={(event) => handleSetPackageValue(event, 'weight')}
        name="weight"
        label="Weight, lb"
        required
        error={errorValue.weight}
      />
    </div>
  );
};

export default CalculatorValues;
