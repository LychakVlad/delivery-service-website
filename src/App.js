import CallBackForm from './components/CallBackForm/CallBackForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <TopMenu />
        <CallBackForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
