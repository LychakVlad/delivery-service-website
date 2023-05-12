import React from 'react';
import ReactDOM from 'react-dom/client';
import './sassStyles/typography.scss';
import './sassStyles/global.scss';
import App from './App';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
