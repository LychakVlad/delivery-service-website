import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MenuList from '../components/MenuList/MenuList';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import CardIcon from '../assets/small-illustration.svg';
import slide1 from '../assets/slide11111.jpeg';
import slide2 from '../assets/slide22222.jpeg';
import SmallCardIcon1 from '../assets/small-card-icon1.png';
import SmallCardIcon3 from '../assets/small-card-icon3.png';
import SmallCardIcon2 from '../assets/small-card-icon2.png';

const Widget = () => {
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
  ];

  const listTitle = 'How it works';

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
      title: 'API',

      linkText: 'Read more',
      link: '/api',
      img: SmallCardIcon2,
    },
  ];

  const headingSlides = [
    {
      title: 'Powerful Widget Integration',
      text: 'Effortlessly integrate Ex Drop widgets into your CMS without additional development',
      btn: 'Connect',
      img: slide1,
    },
    {
      title: 'Seamless Widget Integration',
      text: 'Start delivering orders with Ex Drop widgets without additional development',
      btn: 'Connect',
      img: slide2,
    },
  ];

  return (
    <>
      <TopMenu content={headingSlides} />
      <MenuList
        withBG={true}
        points={pointsFive}
        title={listTitle}
        rounded={true}
      />
      <Map />
      <SmallCardsBlock content={smallCards} img={CardIcon} />
      <CallBackForm withImg={true} />
    </>
  );
};

export default Widget;
