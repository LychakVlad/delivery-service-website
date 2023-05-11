import BigSlider from './components/BigSlider/BigSlider';
import Calculator from './components/Calculator/Calculator';
import CallBackForm from './components/CallBackForm/CallBackForm';
import LargeCardsBlock from './components/Cards/LargeCardsBlock/LargeCardsBlock';
import MidCardsBlock from './components/Cards/MidCardsBlock/MidCardsBlock';
import SmallCardsBlock from './components/Cards/SmallCardsBlock/SmallCardsBlock';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IconsSection from './components/IconsSection/IconsSection';
import Map from './components/Map/Map';
import MenuList from './components/MenuList/MenuList';

import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu />
        <MidCardsBlock />
        <Calculator />
        <Map />
        <LargeCardsBlock />
        <SmallCardsBlock />
        <MenuList />
        <BigSlider />
        <IconsSection />
        <CallBackForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
