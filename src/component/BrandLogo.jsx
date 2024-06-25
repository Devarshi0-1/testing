import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import { Autoplay } from "swiper/modules";

import img1 from "../assets/images/brand-logo/1.png";
import img2 from "../assets/images/brand-logo/2.png";
import img3 from "../assets/images/brand-logo/3.png";
import img4 from "../assets/images/brand-logo/4.png";
import img5 from "../assets/images/brand-logo/5.png";
import img6 from "../assets/images/brand-logo/6.png";

export default function BrandLogo() {
  return (
    <div
      className="brand-logo-area brand-logo-default-area mb-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="brand-logo-slider-container"
            >
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img1} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img2} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img3} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img4} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img5} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="brand-logo-item">
                <a href="#/">
                  <img src={img6} alt="Brand-Logo" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
