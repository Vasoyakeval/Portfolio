import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
import JSE from "../../img/jse.png";
import JS from "../../img/js.png";
import PY from "../../img/py.png"
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Certificate</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
       
        <SwiperSlide>
          <img src={JS} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JSE} alt=" "/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PY} alt=" "/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Portfolio;
