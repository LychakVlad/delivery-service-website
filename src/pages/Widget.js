import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MenuList from '../components/MenuList/MenuList';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide1.jpg';

const Widget = () => {
  const pointsFive = [
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
  ];

  const listTitle = 'How it works';

  const cards = [
    {
      title: 'We pick up and deliver goods daily ',
      linkText: 'Read more',
    },
    {
      title: 'We pick up and deliver goods daily ',
      linkText: 'Read more',
    },
    {
      title: 'We pick up and deliver goods daily ',
      linkText: 'Read more',
    },
    {
      title: 'We pick up and deliver goods daily ',
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

  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu content={headingSlides} />
        <MenuList
          withBG={true}
          points={pointsFive}
          title={listTitle}
          rounded={true}
        />
        <Map />
        <SmallCardsBlock content={cards} img={CardIcon} />
        <CallBackForm withImg={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Widget;
