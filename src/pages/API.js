import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide1111.jpeg';
import slide2 from '../assets/slide2222.jpeg';
import slide3 from '../assets/slide3333.jpeg';
import SmallCardIcon1 from '../assets/small-card-icon1.png';
import SmallCardIcon3 from '../assets/small-card-icon3.png';
import SmallCardIcon4 from '../assets/small-card-icon4.png';

const API = () => {
  const smallCards = [
    {
      title: 'About',
      linkText: 'Read more',
      link: '/about',
      img: SmallCardIcon1,
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

  const content = [
    {
      title: 'Sign up for an Ex Drop API account',
    },
    {
      title: 'Generate API credentials',
    },
    {
      title: 'Authenticate your application with Ex Drop API',
    },
    {
      title: 'Create and track orders using Ex Drop API',
    },
  ];

  const headingSlides = [
    {
      title: 'Seamless Integration with Ex Drop API',
      text: 'Effortlessly manage and track orders using the Ex Drop API',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Streamline Your Workflow with Ex Drop API',
      text: 'Automate order placement and tracking through the Ex Drop API',
      btn: 'Connect',
      img: slide2,
    },
    {
      title: 'Enhance Efficiency with Ex Drop API',
      text: 'Simplify order management and tracking with the Ex Drop API',
      btn: 'Connect',
      img: slide3,
    },
  ];

  return (
    <>
      <TopMenu content={headingSlides} />
      <MidCardsBlock content={content} withButton={true} link={true} />
      <SmallCardsBlock content={smallCards} img={CardIcon} position={true} />
      <CallBackForm withImg={true} />
    </>
  );
};

export default API;
