import { CalcDistance } from './CalcDistance';

export const CalcCost = (
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
) => {
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

  const volume = packageValue.length * packageValue.width * packageValue.height;
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

    if (errorFrom || errorTo || hasErrors || cityFrom === '' || cityTo === '') {
      setShowTotal(false);
    } else {
      setShowTotal(true);
    }
  }
};

export default CalcCost;
