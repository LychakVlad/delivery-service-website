import React, { Suspense } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import Calculator from '../components/Calculator/Calculator';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import MenuList from '../components/MenuList/MenuList';
import BigSlider from '../components/BigSlider/BigSlider';
import IconsSection from '../components/IconsSection/IconsSection';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import CardIcon from '../assets/small-illustration.svg';
import LargeCardIcon from '../assets/delivery-illustration.svg';
import slide1 from '../assets/slide1.jpg';
const Map = React.lazy(() => import('../components/Map/Map'));

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

  const content = [
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Simple returns ',
      text: 'We will return the order if the customer does not pick up the parcel ',
      description: 'of the cost of direct delivery',
      digit: '50%',
      icon: LargeCardIcon,
      shadow: true,
    },
  ];

  const largeCardsTitle = 'More perks';

  return (
    <>
      <TopMenu content={headingSlides} withDelivery={true} />
      <MidCardsBlock content={midCardsContent} withButton={true} />
      <Calculator />
      <Suspense fallback={<div>Loading...</div>}>
        <Map />
      </Suspense>

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
