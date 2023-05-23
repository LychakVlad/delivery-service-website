import React, { Suspense } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import MenuList from '../components/MenuList/MenuList';
import BigSlider from '../components/BigSlider/BigSlider';
import IconsSection from '../components/IconsSection/IconsSection';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import LargeCardIcon from '../assets/delivery-illustration.svg';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import slide1w from '../assets/slide1.webp';
import slide2w from '../assets/slide2.webp';
import slide3w from '../assets/slide3.webp';
import CardIcon1 from '../assets/card-icon1.svg';
import CardIcon2 from '../assets/card-icon2.svg';
import CardIcon3 from '../assets/card-icon3.svg';
const Map = React.lazy(() => import('../components/Map/Map'));
const Calculator = React.lazy(() =>
  import('../components/Calculator/Calculator')
);

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
      title: 'About',
      linkText: 'Read more',
    },
    {
      title: 'API',
      linkText: 'Read more',
    },
    {
      title: 'CMS',
      linkText: 'Read more',
    },
    {
      title: 'Widget',
      linkText: 'Read more',
    },
  ];

  const headingSlides = [
    {
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
      btn: 'Connect',
      img: slide1,
      webp: slide1w,
    },
    {
      title: 'Fast and Reliable Delivery',
      text: 'Get your products delivered quickly and reliably to your customers',
      btn: 'Connect',
      img: slide2,
      webp: slide2w,
    },
    {
      title: 'Global Reach for Your Business',
      text: "Expand your online store's reach worldwide with our international delivery services",
      btn: 'Connect',
      img: slide3,
      webp: slide3w,
    },
  ];

  const midCardsContent = [
    {
      title: 'Easy Order Management',
      img: CardIcon1,
    },
    {
      title: 'Fast Delivery',
      img: CardIcon2,
    },
    {
      title: 'Global Shipping',
      img: CardIcon3,
    },
  ];

  const content = [
    {
      title: 'Easy Returns',
      text: 'Convenient returns for uncollected parcels',
      digit: '50% Off',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Fast Delivery',
      text: 'Quick and reliable delivery service',
      digit: 'On-time',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Global Shipping',
      text: 'Expand your business worldwide',
      digit: 'International Reach',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Real-time Tracking',
      text: 'Track orders in real-time',
      digit: 'Track Every Step',
      icon: LargeCardIcon,
      shadow: true,
    },
  ];

  const largeCardsTitle = 'More perks';

  return (
    <>
      <TopMenu content={headingSlides} withDelivery={true} />
      <MidCardsBlock content={midCardsContent} withButton={true} />
      <Suspense fallback={<div>Loading...</div>}>
        <Calculator />
        <Map />
      </Suspense>

      <LargeCardsBlock content={content} title={largeCardsTitle} />
      <SmallCardsBlock content={cards} position={true} />
      <MenuList points={pointsThree} />
      <BigSlider />
      <IconsSection />
      <CallBackForm />
    </>
  );
};

export default Main;
