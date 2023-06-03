import React from 'react';
import './Modal.scss';
import { ReactComponent as Close } from '../../../assets/close-icon.svg';
import Sucsess from '../../../assets/sucsess.png';
import SucsessW from '../../../assets/sucsess.webp';
import SecondTitle from '../titles/SecondTitle';
import Button from '../Button';
import ImgWithFallback from '../ImgWithFallback';

const Modal = ({ onClick, delivery, value, test }) => {
  const handleClick = () => {
    onClick(false);
  };

  return (
    <>
      {!delivery && (
        <div className="modal" data-testid={test ? test : undefined}>
          <div className="modal__wrapper">
            <ImgWithFallback
              src={SucsessW}
              fallback={Sucsess}
              alt="success-img"
            />
            <div className="modal__content">
              <button className="modal__close-icon" onClick={handleClick}>
                <Close />
              </button>
              <SecondTitle title="Your application has been successfully sent" />
              <div className="modal__center-btn">
                <Button style={`button--w-272`} onClick={handleClick}>
                  Good
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {delivery && (
        <div className="modal" data-testid={test ? test : undefined}>
          <div className="modal__wrapper">
            <ImgWithFallback
              src={SucsessW}
              fallback={Sucsess}
              alt="success-img"
            />
            <div className="modal__content">
              <button className="modal__close-icon" onClick={handleClick}>
                <Close />
              </button>
              <SecondTitle title={`Your order ${value} is on its way`} />
              <div className="modal__center-btn">
                <Button style={`button--w-272`} onClick={handleClick}>
                  Good
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
