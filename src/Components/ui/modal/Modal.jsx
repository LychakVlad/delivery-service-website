import React from 'react';
import './Modal.scss';
import { ReactComponent as Close } from '../../../assets/close-icon.svg';
import { ReactComponent as Sucsess } from '../../../assets/sucsess.svg';
import SecondTitle from '../titles/SecondTitle';
import Button from '../Button';

const Modal = ({ onClick, delivery, value, test }) => {
  const handleClick = () => {
    onClick(false);
  };

  return (
    <>
      {!delivery && (
        <div className="modal" data-testid={test ? test : undefined}>
          <div className="modal__wrapper">
            <Sucsess />
            <div className="modal__content">
              <button className="modal__close-icon" onClick={handleClick}>
                <Close />
              </button>
              <SecondTitle title="Your application has been successfully sent" />
              <Button style={`button--w-272`} onClick={handleClick}>
                Good
              </Button>
            </div>
          </div>
        </div>
      )}
      {delivery && (
        <div className="modal" data-testid={test ? test : undefined}>
          <div className="modal__wrapper">
            <Sucsess />
            <div className="modal__content">
              <button className="modal__close-icon" onClick={handleClick}>
                <Close />
              </button>
              <SecondTitle title={`Your order ${value} is on its way`} />
              <Button style={`button--w-272`} onClick={handleClick}>
                Good
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
