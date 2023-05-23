import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide1.jpeg';

const API = () => {
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

  const content = [
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

  const headingSlides = [
    {
      title: 'Work easily with the Ex Drop API',
      text: 'Automatically place and track orders through the Ex Drop API',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Work easily with the Ex Drop API',
      text: 'Automatically place and track orders through the Ex Drop API',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Work easily with the Ex Drop API',
      text: 'Automatically place and track orders through the Ex Drop API',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Work easily with the Ex Drop API',
      text: 'Automatically place and track orders through the Ex Drop API',
      btn: 'Connect',
      img: slide1,
    },
  ];

  return (
    <>
      <TopMenu content={headingSlides} />
      <MidCardsBlock content={content} withButton={true} link={true} />
      <SmallCardsBlock content={cards} img={CardIcon} position={true} />
      <CallBackForm withImg={true} />
    </>
  );
};

export default API;
