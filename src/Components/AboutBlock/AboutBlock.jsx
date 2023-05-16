import React from 'react';
import './AboutBlock.scss';
import FirstTitle from '../ui/titles/FirstTitle';
import Illustration from '../../assets/big-ill.svg';
import Photo from '../../assets/photo.jpg';

const AboutBlock = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__left">
            <FirstTitle title="What is Ex Drop?" />
            <div className="about__text-block">
              <p className="about__text">
                This new company specializes in delivering packages to online
                stores across the country, offering efficient and reliable
                logistics solutions for businesses of all sizes.
              </p>
              <p className="about__text">
                Whether you are a small business owner or a large retailer, Ex
                Drop has the expertise and resources to help you optimize your
                shipping processes and ensure that your customers receive their
                orders on time.
              </p>
            </div>
            <div className="about__comment">
              <div className="about__comment-img-wrapper">
                <img src={Photo} alt="ceo" className="about__comment-img" />
              </div>
              <div className="about__comment-content">
                <p className="about__comment-text">
                  We are revolutionizing the way businesses operate by providing
                  unparalleled logistics services that leave customers and
                  partners satisfied.
                </p>
                <p className="about__comment-title">
                  Head of Commercial Department at Ex Drop
                </p>
                <p className="about__name">Mike Sanrero</p>
              </div>
            </div>
          </div>
          <div className="about__right">
            <img src={Illustration} alt="Illustration" className="about__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
