import React, { useState } from 'react';
import './TrackDelivery.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Button from '../ui/Button';
import Input from '../form/Input/Input';
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll';
import Modal from '../ui/modal/Modal';

const TrackDelivery = () => {
  const [trackNumber, setTrackNumber] = useState('');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    setTrackNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trackError = trackNumber.length < 2 ? 'Must be 2+ characters' : '';
    setError(trackError);
    if (!trackError) {
      setModalOpen(true);
    }
  };

  useDisableBodyScroll(modalOpen);

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
          maxLength={10}
        />
        <Button style={`button--white button--w-full`} onClick={handleSubmit}>
          Track
        </Button>
      </div>
      {modalOpen ? (
        <Modal onClick={setModalOpen} delivery={true} value={trackNumber} />
      ) : (
        ''
      )}
    </div>
  );
};

export default TrackDelivery;
