import React from 'react';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import ContactBlock from '../components/Contacts/ContactBlock';

const Contact = () => {
  return (
    <>
      <ContactBlock />
      <CallBackForm withImg={true} />
    </>
  );
};

export default Contact;
