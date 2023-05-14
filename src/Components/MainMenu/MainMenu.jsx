import React from 'react';
import './MainMenu.scss';
import slide1 from '../../assets/slide1.jpg';
import MainMenuItem from './MainMenuItem';
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <Swiper
        touchStartPreventDefault={false}
        slidesPerView={1}
        modules={[Pagination, A11y]}
        pagination={{
          clickable: true,
          bulletClass: 'my-pagination-bullet',
          bulletActiveClass: 'my-pagination-bullet-active',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <MainMenuItem
            img={slide1}
            title="Delivery service for online stores"
            text="Develop your business, and we'll bring the orders"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <MainMenuItem
            img={slide1}
            title="Delivery service for online stores"
            text="Develop your business, and we'll bring the orders"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <MainMenuItem
            img={slide1}
            title="Delivery service for online stores"
            text="Develop your business, and we'll bring the orders"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <MainMenuItem
            img={slide1}
            title="Delivery service for online stores"
            text="Develop your business, and we'll bring the orders"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainMenu;
