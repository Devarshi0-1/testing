import React, { useState } from "react";
import HeadPageNav from "./HeadPageNav";
import { products } from "../../Helper";
import { add } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import ProductQuickView from "../ProductQuickView ";
export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");

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
      <main className="main-content">
        <HeadPageNav title="Products" />

        <div className="product-area product-grid-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="shop-toolbar-wrap">
                  <div className="product-showing-status">
                    <p className="count-result">
                      <span>{products.length} </span> Products Found of{" "}
                      <span> 30</span>
                    </p>
                  </div>
                  <div className="product-view-mode">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="column-three-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#column-three"
                          type="button"
                          role="tab"
                          aria-controls="column-three"
                          aria-selected="true"
                        >
                          <i className="fa fa-th"></i>
                        </button>

                        <button
                          className="nav-link"
                          id="nav-list-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-list"
                          type="button"
                          role="tab"
                          aria-controls="nav-list"
                          aria-selected="false"
                        >
                          <i className="fa fa-list"></i>
                        </button>

                        <button
                          className="nav-link"
                          id="column-two-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#column-two"
                          type="button"
                          role="tab"
                          aria-controls="column-two"
                          aria-selected="true"
                        >
                          <i className="fa fa-th-large"></i>
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="product-sorting-menu product-sorting">
                    <span className="current">
                      Sort By :{" "}
                      <span>
                        {" "}
                        Default <i className="fa fa-angle-down"></i>
                      </span>
                    </span>
                    <ul>
                      <li className="active">
                        <a href="shop.html" className="active">
                          Sort by Default
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">Sort by Popularity</a>
                      </li>
                      <li>
                        <a href="shop.html">Sort by Rated</a>
                      </li>
                      <li>
                        <a href="shop.html">Sort by Latest</a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Sort by Price:{" "}
                          <i className="lastudioicon-arrow-up"></i>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Sort by Price:{" "}
                          <i className="lastudioicon-arrow-down"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  {/* Map through products and render each product in the grid view */}
                  <div
                    className="tab-pane fade show active"
                    id="column-three"
                    role="tabpanel"
                    aria-labelledby="column-three-tab"
                  >
                    <div className="row">
                      {products.map((product) => (
                        <div key={product.id} className="col-sm-6 col-md-4">
                          <div className="product-item">
                            <div className="product-thumb">
                              <img
                                src={product.image}
                                alt={product.name}
                                height={"200px"}
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
                                <a
                                  className="action-quick-view"
                                  href="shop-wishlist.html"
                                >
                                  <i className="ion-heart"></i>
                                </a>
                                <a
                                  className="action-quick-view"
                                  href="shop-compare.html"
                                >
                                  <i className="ion-shuffle"></i>
                                </a>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="rating">
                                {[...Array(product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star"
                                      key={index}
                                    ></span>
                                  )
                                )}
                                {[...Array(5 - product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star-o"
                                      key={index}
                                    ></span>
                                  )
                                )}
                              </div>
                              <h4 className="title">
                                <a href="shop-single-product.html">
                                  {product.name}
                                </a>
                              </h4>
                              <div className="prices">
                                <span className="price">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add mapping for other tabs similarly */}
                  <div
                    className="tab-pane fade"
                    id="nav-list"
                    role="tabpanel"
                    aria-labelledby="nav-list-tab"
                  >
                    <div className="row">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="col-12 product-items-list"
                        >
                          <div className="product-item">
                            <div className="product-thumb">
                              <img
                                src={product.image}
                                alt={product.name}
                                height={"200px"}
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
                                <a
                                  className="action-quick-view"
                                  href="shop-wishlist.html"
                                >
                                  <i className="ion-heart"></i>
                                </a>
                                <a
                                  className="action-quick-view"
                                  href="shop-compare.html"
                                >
                                  <i className="ion-shuffle"></i>
                                </a>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="rating">
                                {[...Array(product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star"
                                      key={index}
                                    ></span>
                                  )
                                )}
                                {[...Array(5 - product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star-o"
                                      key={index}
                                    ></span>
                                  )
                                )}
                              </div>
                              <h4 className="title">
                                <a href="shop-single-product.html">
                                  {product.name}
                                </a>
                              </h4>
                              <div className="prices">
                                <span className="price">{product.price}</span>
                              </div>
                              <p>{product.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="column-two"
                    role="tabpanel"
                    aria-labelledby="column-two-tab"
                  >
                    <div className="row">
                      {products.map((product) => (
                        <div key={product.id} className="col-sm-6">
                          <div className="product-item">
                            <div className="product-thumb">
                              <img
                                src={product.image}
                                alt={product.name}
                                height={"200px"}
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
                                <a
                                  className="action-quick-view"
                                  href="shop-wishlist.html"
                                >
                                  <i className="ion-heart"></i>
                                </a>
                                <a
                                  className="action-quick-view"
                                  href="shop-compare.html"
                                >
                                  <i className="ion-shuffle"></i>
                                </a>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="rating">
                                {[...Array(product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star"
                                      key={index}
                                    ></span>
                                  )
                                )}
                                {[...Array(5 - product.stars)].map(
                                  (star, index) => (
                                    <span
                                      className="fa fa-star-o"
                                      key={index}
                                    ></span>
                                  )
                                )}
                              </div>
                              <h4 className="title">
                                <a href="shop-single-product.html">
                                  {product.name}
                                </a>
                              </h4>
                              <div className="prices">
                                <span className="price">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="pagination-area mb-md-50">
                      <nav>
                        <ul className="page-numbers">
                          <li>
                            <a className="page-number active">1</a>
                          </li>
                          <li>
                            <a className="page-number">2</a>
                          </li>
                          <li>
                            <a className="page-number">3</a>
                          </li>
                          <li>
                            <a className="page-number next">
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="sidebar-area shop-sidebar-area">
                  <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Product Categories</h3>
                    </div>
                    <div className="widget-body">
                      <div className="widget-categories">
                        <ul>
                          <li>
                            <a href="shop.html">
                              Accesasories <span>(6)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Computer <span>(4)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Covid-19 <span>(2)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Electronics <span>(6)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Frame Sunglasses <span>(12)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Furniture <span>(7)</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop.html">
                              Genuine Leather <span>(9)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="widget-item mb-md-0">
                    <div className="widget-title">
                      <h3 className="title">Size</h3>
                    </div>
                    <div className="widget-body">
                      <div className="widget-size">
                        <div className="form-check">
                          <input
                            className="form-check-input black"
                            type="radio"
                            name="colorRadio2"
                            id="colorRadio5"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorRadio5"
                          >
                            M (12)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input black"
                            type="radio"
                            name="colorRadio2"
                            id="colorRadio6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorRadio6"
                          >
                            L (09)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input black"
                            type="radio"
                            name="colorRadio2"
                            id="colorRadio7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorRadio7"
                          >
                            XL (07)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input black"
                            type="radio"
                            name="colorRadio2"
                            id="colorRadio8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorRadio8"
                          >
                            XXL (11)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
