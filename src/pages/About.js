import React from 'react';

import CallBackForm from '../components/CallBackForm/CallBackForm';
import AboutBlock from '../components/AboutBlock/AboutBlock';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import CardImg from '../assets/card-photo.jpeg';
import CardImg1 from '../assets/card-photo1.jpeg';
import CardImg2 from '../assets/card-photo2.jpeg';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import SmallCardIcon1 from '../assets/small-card-icon1.png';
import SmallCardIcon2 from '../assets/small-card-icon2.png';
import SmallCardIcon3 from '../assets/small-card-icon3.png';
import SmallCardIcon4 from '../assets/small-card-icon4.png';

const About = () => {
  const content = [
    {
      title: '> 2 000 000 m2 ',
      description: 'Warehouses and fullfill centers',
      img: CardImg1,
    },
    {
      title: '2 000',
      description: 'Couriers',
      img: CardImg,
    },
    {
      title: '10 000',
      description: 'Pickup points',
      img: CardImg2,
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
  const cardsTitle = 'To develop your business we have';
  return (
    <>
      <AboutBlock />
      <LargeCardsBlock content={content} title={cardsTitle} />
      <SmallCardsBlock content={smallCards} img={CardIcon} position={false} />
      <CallBackForm withImg={true} />
    </>
  );
};

export default About;
