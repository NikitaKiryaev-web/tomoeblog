import React, { ReactElement } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Footer.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import logo from "../../assets/images/white-logo.svg";
// TODO Complete footer

const Footer = () => {
  function createSlide(text: string): ReactElement {
    return <SwiperSlide>{text}</SwiperSlide>;
  }

  return (
    <footer className="footer">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
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
    </footer>
  );
};

export default Footer;
