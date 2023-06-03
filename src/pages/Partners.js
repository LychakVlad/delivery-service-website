import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MenuList from '../components/MenuList/MenuList';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import SmallCardIcon1 from '../assets/small-card-icon1.png';
import SmallCardIcon2 from '../assets/small-card-icon2.png';
import SmallCardIcon3 from '../assets/small-card-icon3.png';
import SmallCardIcon4 from '../assets/small-card-icon4.png';
import Rates from '../components/Rates/Rates';
import slide1 from '../assets/slide11.jpeg';
import slide2 from '../assets/slide22.jpeg';
import slide3 from '../assets/slide33.jpeg';
import CardIcon1 from '../assets/mid-card-icon1.png';
import CardIcon2 from '../assets/mid-card-icon2.png';
import CardIcon3 from '../assets/mid-card-icon3.png';
import CardIcon4 from '../assets/mid-card-icon4.png';

const Partners = () => {
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

  const smallCards = [
    {
      title: 'About',
      linkText: 'Read more',
      link: '/about',
      img: SmallCardIcon1,
    },
    {
      title: 'API',
      linkText: 'Read more',
      link: '/api',
      img: SmallCardIcon2,
    },
    {
      title: 'CMS',
      linkText: 'Read more',
      link: '/cms',
      img: SmallCardIcon3,
    },
    {
      title: 'Widget',
      linkText: 'Read more',
      link: '/widget',
      img: SmallCardIcon4,
    },
  ];

  const headingSlides = [
    {
      title: 'Fast and Reliable Delivery Services',
      text: 'Expand your online business and let us handle the deliveries',
      btn: 'Get Started',
      img: slide1,
    },
    {
      title: 'Efficient Delivery Solutions for E-commerce',
      text: 'Streamline your operations and leave the deliveries to us',
      btn: 'Get Started',
      img: slide2,
    },
    {
      title: 'Boost Your Online Store with Seamless Delivery',
      text: 'Take your business to new heights with our delivery expertise',
      btn: 'Get Started',
      img: slide3,
    },
  ];
  const midCardsContent = [
    {
      title: 'Order Tracking',
      img: CardIcon3,
    },
    {
      title: 'Speedy Delivery',
      img: CardIcon2,
    },
    {
      title: 'Worldwide Shipping',
      img: CardIcon1,
    },
    {
      title: 'Savings on Shipping',
      img: CardIcon4,
    },
  ];

  return (
    <>
      <TopMenu content={headingSlides} withDelivery={true} />
      <MidCardsBlock
        content={midCardsContent}
        withButton={false}
        title="Four benefits of your delivery"
      />
      <MenuList withBG={true} points={pointsFive} />
      <Rates />
      <SmallCardsBlock content={smallCards} position={true} />
      <Map />
      <CallBackForm withImg={true} />
    </>
  );
};

export default Partners;
