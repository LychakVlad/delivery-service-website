import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import AboutBlock from '../components/AboutBlock/AboutBlock';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import CardImg from '../assets/card-photo.jpeg';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';

const About = () => {
  const content = [
    {
      title: '> 2 000 000 m2 ',
      description: 'Warehouses and fullfill centers',
      img: CardImg,
    },
    {
      title: '2 000',
      description: 'Couriers',
      img: CardImg,
    },
    {
      title: '10 000',
      description: 'Pickup points',
      img: CardImg,
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

  const cardsTitle = 'To develop your business we have';
  return (
    <>
      <div className="body">
        <Header rounded={true} />
        <div className="main">
          <AboutBlock />
          <LargeCardsBlock content={content} title={cardsTitle} />
          <SmallCardsBlock content={cards} img={CardIcon} position={false} />
          <CallBackForm withImg={true} />
        </div>
        <Footer withoutFaq={true} />
      </div>
    </>
  );
};

export default About;
