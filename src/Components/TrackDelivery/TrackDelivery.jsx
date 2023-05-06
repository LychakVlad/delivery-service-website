import React, { useState } from 'react';
import './TrackDelivery.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';
import Input from '../form/Input/Input';

const TrackDelivery = () => {
  const [trackNumber, setTrackNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setTrackNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(trackNumber);
    const trackError =
      trackNumber.length < 2 ? 'Number must be at least 2 characters long' : '';
    setError(trackError);
    if (!trackError) {
      setTrackNumber('');
    }
  };

  return (
    <div className="track-delivery">
      <SecondTitle title="Track shipping" className="title--white" />
      <div className="track-delivery__bottom">
        <Input
          type="text"
          name="track"
          value={trackNumber}
          label="Track"
          className="input-container--transparent"
          onChange={handleChange}
          error={error}
        />
        <Button style={`button--white button--w-full`} onClick={handleSubmit}>
          Track
        </Button>
      </div>
    </div>
  );
};

export default TrackDelivery;
