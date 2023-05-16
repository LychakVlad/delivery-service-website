import React from 'react';
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
import CardIcon from '../assets/small-illustration.svg';
import LargeCardIcon from '../assets/delivery-illustration.svg';
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
      key: 1,
    },
    {
      title: 'My Account',
      linkText: 'Read more',
      key: 2,
    },
    {
      title: 'My Account',
      linkText: 'Read more',
      key: 3,
    },
    {
      title: 'My Account',
      linkText: 'Read more',
      key: 4,
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
      key: 1,
    },
    {
      title: 'Create and track orders',
      key: 2,
    },
    {
      title: 'Create and track orders',
      key: 3,
    },
    {
      title: 'Create and track orders',
      key: 4,
    },
  ];

  const content = [
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
      key: 1,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
      key: 2,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
      key: 3,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
      key: 4,
    },
  ];

  const largeCardsTitle = 'More perks';

  return (
    <>
      <TopMenu content={headingSlides} />
      <MidCardsBlock content={midCardsContent} withButton={true} />
      <Calculator />
      <Map />
      <LargeCardsBlock content={content} title={largeCardsTitle} />
      <SmallCardsBlock content={cards} img={CardIcon} position={true} />
      <MenuList points={pointsThree} />
      <BigSlider />
      <IconsSection />
      <CallBackForm />
    </>
  );
};

export default Main;
