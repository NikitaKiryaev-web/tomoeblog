import React, { ReactElement } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Footer.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import logo from "../../assets/images/white-logo.svg";

const Footer = () => {
  function createSlide(text: string): ReactElement {
    return <SwiperSlide>{text}</SwiperSlide>;
  }

  return (
    <footer className="footer">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          1600: {
            width: 1600,
            slidesPerView: 5,
          },
          1920: {
            width: 1920,
            slidesPerView: 6,
          },
        }}
      >
        {createSlide("Digital product design")}
        {createSlide("Remote work")}
        {createSlide("UX design")}
        {createSlide("Distributed teams")}
        {createSlide("Creativity")}
        {createSlide("Strategy")}
        {createSlide("Suspense")}
        {createSlide("Growth")}
      </Swiper>
      <img src={logo} alt="Logo" className="footer__logo" />
      <p className="footer__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus.
      </p>
      <ul className="footer__links">
        <li className="footer__links-item">
          <a href="#" className="footer__links-link">
            Twitter
          </a>
        </li>
        <li className="footer__links-item">
          <a href="#" className="footer__links-link">
            LinkedIn
          </a>
        </li>
        <li className="footer__links-item">
          <a href="#" className="footer__links-link">
            RSS
          </a>
        </li>
      </ul>
      <p className="footer__author-text">
        ©2022 Tomoe Co. <span>All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
