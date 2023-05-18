import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MenuList from '../components/MenuList/MenuList';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import Rates from '../components/Rates/Rates';
import slide1 from '../assets/slide1.jpg';

const XDoc = () => {
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
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
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
    <>
      <TopMenu content={headingSlides} withDelivery={true} />
      <MidCardsBlock content={midCardsContent} withButton={false} />
      <MenuList withBG={true} points={pointsFive} />
      <Rates />
      <SmallCardsBlock content={cards} img={CardIcon} />
      <Map />
      <CallBackForm withImg={true} />
    </>
  );
};

export default XDoc;
