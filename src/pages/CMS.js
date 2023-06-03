import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide111.jpeg';
import slide2 from '../assets/slide222.jpeg';
import slide3 from '../assets/slide333.jpeg';
import CMSBlock from '../components/CMSBlock/CMSBlock';
import SmallCardIcon1 from '../assets/small-card-icon1.png';
import SmallCardIcon2 from '../assets/small-card-icon2.png';
import SmallCardIcon4 from '../assets/small-card-icon4.png';
import CardIcon1 from '../assets/mid-card-icon1.png';
import CardIcon2 from '../assets/mid-card-icon2.png';
import CardIcon3 from '../assets/mid-card-icon3.png';
import CardIcon4 from '../assets/mid-card-icon4.png';

const CMS = () => {
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
      title: 'Widget',
      linkText: 'Read more',
      link: '/widget',
      img: SmallCardIcon4,
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

  const headingSlides = [
    {
      title: 'Simplified CMS Integration',
      text: 'Start delivering orders with Ex Drop effortlessly, no additional development required',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Effortless Order Fulfillment',
      text: 'Easily manage and deliver your orders using Ex Drop',
      btn: 'Connect',
      img: slide2,
    },
    {
      title: 'Streamlined Delivery Solutions',
      text: "Optimize your online store's operations with Ex Drop",
      btn: 'Connect',
      img: slide3,
    },
  ];

  return (
    <>
      <TopMenu content={headingSlides} />
      <MidCardsBlock content={midCardsContent} withButton={true} link={false} />
      <CMSBlock />
      <SmallCardsBlock content={smallCards} img={CardIcon} position={true} />
      <CallBackForm withImg={true} />
    </>
  );
};

export default CMS;
