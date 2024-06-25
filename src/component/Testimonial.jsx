import icon from '../assets/images/icons/1.png';
import shape from '../assets/images/testimonial/shape1.png';
import testimonial from '../assets/images/testimonial/1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="testimonial-area testimonial-default-area mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="title">Testimonial</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1300">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,  
              }}
      
              
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '@1.00': {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="client-content">
                    <div className="inner-content">
                      <div className="icon">
                        <img src={icon} alt="Icon" />
                      </div>
                      <p>Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.</p>
                    </div>
                    <div className="shape-group">
                      <div className="shape-style1">
                        <img src={shape} alt="Shape" />
                      </div>
                    </div>
                  </div>
                  <div className="client-info">
                    <div className="thumb">
                      <img src={testimonial} alt="Testimonial" />
                    </div>
                    <div className="desc">
                      <h4 className="title">Dasia Lovell</h4>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="client-content">
                    <div className="inner-content">
                      <div className="icon">
                        <img src={icon} alt="Icon" />
                      </div>
                      <p>There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <div className="shape-group">
                      <div className="shape-style1">
                        <img src={shape} alt="Shape" />
                      </div>
                    </div>
                  </div>
                  <div className="client-info">
                    <div className="thumb">
                      <img src={testimonial} alt="Testimonial" />
                    </div>
                    <div className="desc">
                      <h4 className="title">Demetri Caron</h4>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="client-content">
                    <div className="inner-content">
                      <div className="icon">
                        <img src={icon} alt="Icon" />
                      </div>
                      <p>Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.</p>
                    </div>
                    <div className="shape-group">
                      <div className="shape-style1">
                        <img src={shape} alt="Shape" />
                      </div>
                    </div>
                  </div>
                  <div className="client-info">
                    <div className="thumb">
                      <img src={testimonial} alt="Testimonial" />
                    </div>
                    <div className="desc">
                      <h4 className="title">Akhil Newman</h4>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <div className="client-content">
                    <div className="inner-content">
                      <div className="icon">
                        <img src={icon} alt="Icon" />
                      </div>
                      <p>There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <div className="shape-group">
                      <div className="shape-style1">
                        <img src={shape} alt="Shape" />
                      </div>
                    </div>
                  </div>
                  <div className="client-info">
                    <div className="thumb">
                      <img src={testimonial} alt="Testimonial" />
                    </div>
                    <div className="desc">
                      <h4 className="title">Dasia Lovell</h4>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="thumb-style bg-img" data-bg-img="assets/images/testimonial/shape2.png"></div>
    </section>
  );
}
