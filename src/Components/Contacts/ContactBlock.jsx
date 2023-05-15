import React, { useState } from 'react';
import './ContactBlock.scss';
import ThirdTitle from '../ui/titles/ThirdTitle';
import Copy from '../../assets/copy.svg';

const ContactBlock = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const data =
    'BANK OF AMERICA,City,New York City,Bank account number,0000 0000 0000 0000,Routing number,0000000000000000,SWIFT/BIC code,000000000000000000000';

  const handleCopy = () => {
    setModalOpen(true);
    navigator.clipboard.writeText(data);
    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  };

  return (
    <div className="contact-block">
      <div className="container">
        <div className="contact-block__wrapper">
          <div className="contact-block__first-column">
            <ThirdTitle title="Online retailers" />
            <h4 className="contact-block__text contact-block__text--title">
              To senders
            </h4>
            <p className="contact-block__text">help-testing@gmail.com</p>
            <h4 className="contact-block__text contact-block__text--title">
              Integrations
            </h4>
            <p className="contact-block__text">help-testing@gmail.com</p>
          </div>
          <div className="contact-block__second-column">
            <div className="contact-block__credentials-top">
              {' '}
              <ThirdTitle title="Credentials" />
              <button className="contact-block__btn" onClick={handleCopy}>
                <img src={Copy} alt="copy-icon" />
              </button>
              {modalOpen && (
                <div className="contact-block__copy-modal">
                  Copied to clipboard
                </div>
              )}
            </div>
            <h4 className="contact-block__text contact-block__text--title">
              BANK OF AMERICA
            </h4>
            <div className="contact-block__credentials-block">
              <p className="contact-block__text">City</p>
              <p className="contact-block__text">New York City</p>
            </div>
            <div className="contact-block__credentials-block">
              <p className="contact-block__text">Bank account number</p>
              <p className="contact-block__text">0000 0000 0000 0000</p>
            </div>
            <div className="contact-block__credentials-block">
              <p className="contact-block__text">Routing number</p>
              <p className="contact-block__text">0000000000000000</p>
            </div>
            <div className="contact-block__credentials-block">
              <p className="contact-block__text">SWIFT/BIC code</p>
              <p className="contact-block__text">000000000000000000000</p>
            </div>
          </div>
          <div className="contact-block__third-column">
            <ThirdTitle title="To media and partners" />
            <p className="contact-block__text">help-testing@gmail.com</p>
            <a
              href="mailto:lycakvladislav@gmail.com"
              className="contact-block__text contact-block__text--color-blue"
            >
              help-testing@gmail.com
            </a>
          </div>
          <div className="contact-block__fourth-column">
            {' '}
            <ThirdTitle title="Franchise" />
            <p className="contact-block__text">help-testing@gmail.com</p>
            <a
              href="mailto:lycakvladislav@gmail.com"
              className="contact-block__text contact-block__text--color-blue"
            >
              help-testing@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
