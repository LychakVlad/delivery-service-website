import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import XDoc from './pages/XDoc';
import Error from './pages/Error';
import Widget from './pages/Widget';
import API from './pages/API';
import CMS from './pages/CMS';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/xdoc" element={<XDoc />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/api" element={<API />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
