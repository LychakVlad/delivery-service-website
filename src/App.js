import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import XDoc from './pages/XDoc';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/xdoc" element={<XDoc />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
