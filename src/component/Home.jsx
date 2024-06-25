import ss from "../assets/images/slider/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import banner2 from "../assets/images/category/5.png";
import banner3 from "../assets/images/category/4.png";
import teddy from "../assets/images/category/1.png";
import Discountsection from "./Discountsection";
import ProductHome from "./ProductHome";
import TrendingProducts from "./TrendingProducts";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <section className="home-slider-area slider-default">
          <div className="home-slider-content">
            <div className="swiper-container home-slider-container">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div className="home-slider-item">
                    <div className="thumb-one bg-img" data-bg-img={ss}></div>
                    <div className="slider-content-area">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="content">
                              <div className="inner-content">
                                <h2>Best Kids Store & Online Shop</h2>
                                <p>Give The Gift Of Your Children Everyday</p>
                                <a href="shop.html" className="btn-theme">
                                  Shop This Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img className="thumb-two" src={ss} alt="Image" />
                    </div>
                    <div className="shape-top bg-img" data-bg-img={ss}></div>
                    <div className="shape-bottom bg-img" data-bg-img={ss}></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="home-slider-item">
                    <div className="thumb-one bg-img" data-bg-img={ss}></div>
                    <div className="slider-content-area">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="content">
                              <div className="inner-content">
                                <h2>Best Kids Store & Online Shop</h2>
                                <p>Give The Gift Of Your Children Everyday</p>
                                <a href="shop.html" className="btn-theme">
                                  Shop This Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img className="thumb-two" src={ss} alt="Image" />
                    </div>
                    <div className="shape-top bg-img" data-bg-img={ss}></div>
                    <div className="shape-bottom bg-img" data-bg-img={ss}></div>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlide components as needed */}
              </Swiper>
            </div>
          </div>
        </section>
        <section
          className="category-area product-category1-area"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row category-items1">
              <div className="col-sm-6 col-md-4">
                <div className="category-item">
                  <div className="thumb thumb-style1">
                    <img src={teddy} alt="Image" />
                    <div className="content">
                      <div className="contact-info">
                        <h2 className="title">Baby Dress</h2>
                        <h4 className="price">$32.00</h4>
                      </div>
                      <a className="btn-link" href="shop.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="category-item mt-xs-25">
                  <div className="thumb thumb-style2">
                    <img src={teddy} alt="Image" />
                    <div className="content">
                      <div className="contact-info">
                        <h2 className="title">Baby Toys</h2>
                        <h4 className="price">$25.00</h4>
                      </div>
                      <a className="btn-link" href="shop.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="category-item mt-sm-25">
                  <div className="thumb thumb-style3">
                    <img src={teddy} alt="Image" />
                    <div className="content">
                      <div className="contact-info">
                        <h2 className="title">Teddy Bear</h2>
                        <h4 className="price">$18.00</h4>
                      </div>
                      <a className="btn-link" href="shop.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductHome />
        <Discountsection />

        <section
          className="category-area product-category2-area"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row category-items2">
              <div className="col-md-6">
                <div className="category-item">
                  <div className="thumb">
                    <img className="w-100" src={banner3} alt="Image" />
                    <div className="content">
                      <div className="contact-info">
                        <h2 className="title text-white">Collection</h2>
                        <h4 className="price text-white">
                          Flat <span>20%</span> Off
                        </h4>
                      </div>
                      <a className="btn-theme" href="shop.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-item mt-sm-50">
                  <div className="thumb">
                    <img className="w-100" src={banner2} alt="Image" />
                    <div className="content">
                      <div className="contact-info">
                        <h2 className="title">Collection</h2>
                        <h4 className="price">
                          Flat <span>30%</span> Off
                        </h4>
                      </div>
                      <a className="btn-theme" href="shop.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrendingProducts />
      </main>
    </>
  );
}
