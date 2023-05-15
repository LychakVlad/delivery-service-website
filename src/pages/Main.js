import React from 'react';
import Header from '../components/Header/Header';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import Calculator from '../components/Calculator/Calculator';
import Map from '../components/Map/Map';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import MenuList from '../components/MenuList/MenuList';
import BigSlider from '../components/BigSlider/BigSlider';
import IconsSection from '../components/IconsSection/IconsSection';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import Footer from '../components/Footer/Footer';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide1.jpg';

const Main = () => {
  const pointsThree = [
    {
      number: 1,
      text: 'Register and sign the offer online',
    },
    {
      number: 2,
      text: 'Create an order through a personal account, API or module',
    },
    {
      number: 3,
      text: 'Bring the parcel to the collection point or give it to the courier',
    },
    {
      number: 4,
      text: 'Order a pass for our driver',
    },
    {
      number: 5,
      text: 'Track shipping online',
    },
  ];

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

  const midCardsContent = [
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

  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu content={headingSlides} />
        <MidCardsBlock content={midCardsContent} />
        <Calculator />
        <Map />
        <LargeCardsBlock />
        <SmallCardsBlock content={cards} img={CardIcon} position={true} />
        <MenuList points={pointsThree} />
        <BigSlider />
        <IconsSection />
        <CallBackForm />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
