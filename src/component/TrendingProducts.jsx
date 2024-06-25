import { products } from "../Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { add } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import ProductQuickView from "./ProductQuickView ";
export default function TrendingProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("1");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  const handleAddToCart = () => {
    if (selectedProduct) {
      // Add selectedProduct with the specified quantity to the cart
      handleAdd({ ...selectedProduct, quantity });
      handleCloseModal();
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <>
      <ProductQuickView
        selectedProduct={selectedProduct}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleAddToCart={handleAddToCart}
      />

      {/* <!--== Start Product Tab Area Wrapper ==--> */}
      <section className="product-area product-style2-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="title">Trending Product</h2>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-2">
            <div className="col-12" id="trendingProducts">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
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
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="slide-item">
                      {/* <!-- Start Product Item --> */}
                      <div className="product-item">
                        <div className="product-thumb">
                          <img
                            src={product.image}
                            alt={product.name}
                            height={"200px"}
                            width={"150px"}
                          />
                          <div className="product-action">
                            <a
                              className="action-quick-view"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Add to cart"
                              onClick={() => handleAdd(product)}
                            >
                              <i className="ion-ios-cart"></i>
                            </a>
                            <a
                              className="action-quick-view"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Product details"
                              onClick={() => handleOpenModal(product)}
                            >
                              <i className="ion-arrow-expand"></i>
                            </a>
                            <a className="action-quick-view" href="">
                              <i className="ion-heart"></i>
                            </a>
                            <a className="action-quick-view" href="">
                              <i className="ion-shuffle"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="rating">
                            {Array.from({ length: product.stars }).map(
                              (_, index) => (
                                <span key={index} className="fa fa-star"></span>
                              )
                            )}
                          </div>
                          <h4 className="title">
                            <a href="">{product.name}</a>
                          </h4>
                          <div className="prices">
                            <span className="price">{product.price}</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Item --> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== End Product Tab Area Wrapper ==--> */}
    </>
  );
}
