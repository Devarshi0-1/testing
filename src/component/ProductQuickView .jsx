import React from "react";

const ProductQuickView = ({
  selectedProduct,
  isModalOpen,
  handleCloseModal,
  quantity,
  handleQuantityChange,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleAddToCart,
}) => {
  return (
    selectedProduct && (
      <aside
        className={`product-quick-view-modal ${isModalOpen ? "active" : ""}`}
      >
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            >
              <span className="pe-7s-close">
                <i className="lastudioicon-e-remove"></i>
              </span>
            </button>
            <div className="row row-gutter-0">
              <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="thumb w-75">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={50}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-product-info">
                  <h4 className="title">{selectedProduct.name}</h4>
                  <div className="prices">
                    <span className="price">${selectedProduct.price}</span>
                  </div>
                  <div className="product-rating">
                    <div className="rating">
                      {[...Array(selectedProduct.stars)].map((star, index) => (
                        <span className="fa fa-star" key={index}></span>
                      ))}
                      {[...Array(5 - selectedProduct.stars)].map(
                        (star, index) => (
                          <span className="fa fa-star-o" key={index}></span>
                        )
                      )}
                    </div>
                    <div className="review">
                      <a href="#/">(5 Customer Review)</a>
                    </div>
                  </div>
                  <div className="single-product-featured">
                    <ul>
                      <li>
                        <i className="fa fa-check"></i> Free Shipping
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Support 24/7
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Money Return
                      </li>
                    </ul>
                  </div>
                  <p className="product-desc">
                    {selectedProduct.description || "No description available"}
                  </p>
                  <div className="quick-product-action">
                    <div className="action-top">
                      <div className="pro-qty d-flex">
                        <button
                          onClick={handleDecreaseQuantity}
                          className="dec qtybtn border-0 ms-3"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          title="Quantity"
                          value={quantity}
                          onChange={handleQuantityChange}
                        />
                        <button
                          onClick={handleIncreaseQuantity}
                          className="inc qtybtn border-0 me-3"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-theme"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                      <a className="btn-wishlist">Add to Wishlist</a>
                    </div>
                  </div>
                  <div className="widget">
                    <h3 className="title">SKU:</h3>
                    <div className="widget-tags">
                      <span>{selectedProduct.sku || "N/A"}</span>
                    </div>
                  </div>
                  <div className="widget">
                    <h3 className="title">Categories:</h3>
                    <div className="widget-tags">
                      {(selectedProduct.categories || []).map(
                        (category, index) => (
                          <a href="blog.html" key={index}>
                            {category}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <div className="widget">
                    <h3 className="title">Tag:</h3>
                    <div className="widget-tags">
                      {(selectedProduct.tags || []).map((tag, index) => (
                        <a href="blog.html" key={index}>
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="widget">
                    <h3 className="title">Share:</h3>
                    <div className="widget-tags widget-share">
                      <span className="fa fa-facebook"></span>
                      <span className="fa fa-dribbble"></span>
                      <span className="fa fa-pinterest-p"></span>
                      <span className="fa fa-twitter"></span>
                      <span className="fa fa-linkedin"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas-overlay" onClick={handleCloseModal}></div>
      </aside>
    )
  );
};

export default ProductQuickView;
