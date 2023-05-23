import React from 'react';
import './MainMenu.scss';
import MainMenuItem from './MainMenuItem';
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const MainMenu = ({ content }) => {
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
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <MainMenuItem
              img={item.img}
              title={item.title}
              text={item.text}
              btn={item.btn}
              webp={item.webp}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainMenu;
