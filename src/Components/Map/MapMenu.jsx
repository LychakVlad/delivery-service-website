import React from 'react';
import Toggle from '../form/toggle/Toggle';
import Input from '../form/Input/Input';
import ThirdTitle from '../ui/titles/ThirdTitle';
import CheckBox from '../form/checkbox/CheckBox';
import AutocompleteInput from '../form/Input/AutocompleteInput';

const MapMenu = ({
  postOffices,
  setPostOffices,
  selfPickup,
  setSelfPickup,
  byCardOnReceipt,
  setByCardOnReceipt,
  byCashOnReceipt,
  setByCashOnReceipt,
  setMainCoords,
  cityFind,
  setCityFind,
}) => {
  const toggleHandle = () => {
    console.log('toggle');
  };
  return (
    <div className="map-menu">
      <AutocompleteInput
        type="text"
        value={cityFind}
        name="to"
        label="Find City"
        required
        setSearchTerm={setCityFind}
        setCoords={setMainCoords}
      />
      <Toggle
        clickHandle={toggleHandle}
        firstTitle="Surrender"
        secondTitle="Pick up"
      />
      <ThirdTitle title="Show me" />
      <CheckBox
        name="postOffices"
        label="Post Offices"
        description="There are employees here who can help"
        checked={!postOffices}
        onChange={() => setPostOffices(!postOffices)}
      />
      <CheckBox
        name="selfPickup"
        label="Self-Pickup"
        description="Automated points, suitable for small items"
        checked={!selfPickup}
        onChange={() => setSelfPickup(!selfPickup)}
      />
      <ThirdTitle title="Payment method" />
      <CheckBox
        name="byCardOnReceipt"
        label="By card on receipt"
        checked={!byCardOnReceipt}
        onChange={() => setByCardOnReceipt(!byCardOnReceipt)}
      />
      <CheckBox
        name="byCashOnReceipt"
        label="By cash on receipt"
        checked={!byCashOnReceipt}
        onChange={() => setByCashOnReceipt(!byCashOnReceipt)}
      />
    </div>
  );
};

export default MapMenu;
