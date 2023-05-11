import React from 'react';
import ThirdTitle from '../ui/titles/ThirdTitle';

const BigSlide = () => {
  return (
    <div className="big-slide">
      <img src="" alt="" className="big-slide__img" />
      <ThirdTitle title="Mike Polo" />
      <p className="big-slide__company">Amazon</p>
      <p className="big-slide__rank">Head of Buyer's Orders Department </p>
      <p className="big-slide__text">
        I would like to express my gratitude to the logistics company that has
        been providing excellent and punctual delivery services for our goods
        across the country for the past six months. Working with them has
        allowed me to forget about the usual concerns associated with the
        delivery process.
      </p>
    </div>
  );
};

export default BigSlide;