import React, { useState } from 'react';
import Toggle from '../form/toggle/Toggle';
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
  const [activeTab, setActiveTab] = useState('details');
  const toggleHandle = () => {
    setActiveTab(activeTab === 'details' ? 'pickup' : 'details');
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
        firstTitle="Details"
        secondTitle="Pick up"
      />
      {activeTab === 'details' && (
        <div>
          <ThirdTitle title="This is tittle" />
          <p>
            And this is text, a lot of text, a lot of text, a lot of text, a lot
            of text, a lot of text, a lot of text, a lot of text, a lot of text
          </p>
        </div>
      )}

      {activeTab === 'pickup' && (
        <div className="map-menu__checkboxes">
          <div className="map-menu__column-left">
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
          </div>
          <div className="map-menu__column-right">
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
        </div>
      )}
    </div>
  );
};

export default MapMenu;
