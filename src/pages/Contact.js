import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
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
