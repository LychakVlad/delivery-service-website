import Calculator from './components/Calculator/Calculator';
import CallBackForm from './components/CallBackForm/CallBackForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MidCardsBlock from './components/MidCardsBlock/MidCardsBlock';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu />
        <MidCardsBlock />
        <Calculator />
        <CallBackForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
