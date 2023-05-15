import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide1.jpg';
import CMSBlock from '../components/CMSBlock/CMSBlock';

const CMS = () => {
  const cards = [
    {
      title: 'My Account',
      linkText: 'Read more',
    },
    {
      title: 'My Account',
      linkText: 'Read more',
    },
    {
      title: 'My Account',
      linkText: 'Read more',
    },
    {
      title: 'My Account',
      linkText: 'Read more',
    },
  ];

  const content = [
    {
      title: 'Create and track orders',
    },
    {
      title: 'Create and track orders',
    },
    {
      title: 'Create and track orders',
    },
    {
      title: 'Create and track orders',
    },
  ];

  const headingSlides = [
    {
      title: 'CMS Modules',
      text: 'Start delivering orders with Ex Drop without additional development',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'CMS Modules',
      text: 'Start delivering orders with Ex Drop without additional development',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'CMS Modules',
      text: 'Start delivering orders with Ex Drop without additional development',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'CMS Modules',
      text: 'Start delivering orders with Ex Drop without additional development',
      btn: 'Connect',
      img: slide1,
    },
  ];

  return (
    <>
      <div className="body">
        <Header />
        <div className="main">
          <TopMenu content={headingSlides} />
          <MidCardsBlock content={content} withButton={true} link={false} />
          <CMSBlock />
          <SmallCardsBlock content={cards} img={CardIcon} position={true} />
          <CallBackForm withImg={true} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CMS;
