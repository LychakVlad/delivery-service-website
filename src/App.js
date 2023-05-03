import CallBackForm from './components/CallBackForm/CallBackForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <CallBackForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
