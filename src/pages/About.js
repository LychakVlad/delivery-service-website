import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import ContactBlock from '../components/Contacts/ContactBlock';

const About = () => {
  return (
    <>
      <div className="body">
        <Header rounded={true} />
        <div className="main">
          <ContactBlock />
          <CallBackForm withImg={true} />
        </div>
        <Footer withoutFaq={true} />
      </div>
    </>
  );
};

export default About;
