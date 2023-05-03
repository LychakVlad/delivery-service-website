import CallBackForm from './Components/CallBackForm/CallBackForm';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

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
