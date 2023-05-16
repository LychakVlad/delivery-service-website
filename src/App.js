import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import XDoc from './pages/XDoc';
import Error from './pages/Error';
import Widget from './pages/Widget';
import API from './pages/API';
import CMS from './pages/CMS';
import Contact from './pages/Contact';
import About from './pages/About';

import PageLayout from './pages/PageLayout';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/xdoc" element={<XDoc />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="/api" element={<API />} />
            <Route path="/cms" element={<CMS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
