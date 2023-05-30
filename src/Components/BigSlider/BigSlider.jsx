import React from 'react';
import './BigSlider.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import BigSlide from './BigSlide';

import { Swiper, SwiperSlide } from 'swiper/react';

const BigSlider = ({ content }) => {
  return (
    <div className="big-slider">
      <div className="container container--slider">
        <div className="big-slider__wrapper">
          <SecondTitle title="Satisfied customers" />
          <Swiper
            touchStartPreventDefault={false}
            slidesPerView={3.5}
            spaceBetween={24}
            style={{
              marginTop: '40px',
              overflow: 'visible',
              paddingBottom: '56px',
            }}
            breakpoints={{
              320: {
                width: 480,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1024: {
                width: 1024,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
            }}
          >
            {content.map((item, index) => (
              <SwiperSlide key={index}>
                <BigSlide content={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default BigSlider;
