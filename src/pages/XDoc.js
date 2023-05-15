import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import MenuList from '../components/MenuList/MenuList';

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

const XDoc = () => {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu />
        <MidCardsBlock withButton={false} />
        <MenuList withBG={true} points={pointsFive} />
        <Map />

        <CallBackForm withImg={true} />
      </div>
      <Footer />
    </div>
  );
};

export default XDoc;
