import React from 'react';
import './BigSlider.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import BigSlide from './BigSlide';
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BigSlider = () => {
  return (
    <div className="big-slider">
      <div className="container container--slider">
        <div className="big-slider__wrapper">
          <SecondTitle title="Satisfied customers" />
          <Swiper
            slidesPerView={3.5}
            spaceBetween={'24'}
            style={{ marginTop: '40px', overflow: 'visible' }}
          >
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BigSlide />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default BigSlider;
