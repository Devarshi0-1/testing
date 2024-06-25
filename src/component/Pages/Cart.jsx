import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, updateQuantity } from "../../redux/CartSlice";
import HeadPageNav from "./HeadPageNav";
import img1 from "../../assets/images/shop/details/nav2.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleIncreaseQuantity = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    } else {
      dispatch(remove(id)); // Remove item if quantity becomes 0
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <main className="main-content">
        <HeadPageNav title="Cart" />
        <section className="product-area cart-page-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table-wrap">
                  <div className="cart-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="width-thumbnail"></th>
                          <th className="width-name">Product</th>
                          <th className="width-price">Price</th>
                          <th className="width-quantity">Quantity</th>
                          <th className="width-subtotal">Subtotal</th>
                          <th className="width-remove"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <a href="shop-single-product.html">
                                <img src={item.image || img1} alt="Image" />
                              </a>
                            </td>
                            <td className="product-name">
                              <h5>
                                <a href="shop-single-product.html">
                                  {item.name}
                                </a>
                              </h5>
                            </td>
                            <td className="product-price">
                              <span className="amount">
                                ${item.price.toFixed(2)}
                              </span>
                            </td>
                            <td className="cart-quality">
                              <div className="quick-product-action">
                                <div className="action-top">
                                  <div className="pro-qty d-flex">
                                    <button
                                      onClick={() =>
                                        handleDecreaseQuantity(
                                          item.id,
                                          item.quantity
                                        )
                                      }
                                      className="dec qtybtn border-0 ms-3"
                                    >
                                      -
                                    </button>
                                    <input
                                      type="text"
                                      id="quantity"
                                      title="Quantity"
                                      value={item.quantity}
                                      onChange={(e) =>
                                        handleQuantityChange(
                                          item.id,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <button
                                      onClick={() =>
                                        handleIncreaseQuantity(
                                          item.id,
                                          item.quantity
                                        )
                                      }
                                      className="inc qtybtn border-0 me-3"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="product-total">
                              <span>
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </td>
                            <td className="product-remove">
                              <a onClick={() => handleRemoveItem(item.id)}>
                                <i className="ion-ios-trash-outline"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="cart-shiping-update-wrapper">
                  <div className="cart-shiping-btn continure-btn">
                    <Link className="btn btn-link" to="/products">
                      <i className="ion-ios-arrow-left"></i> Back To Shop
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="cart-calculate-discount-wrap mb-40">
                  <h4>Calculate shipping</h4>
                  <div className="calculate-discount-content">
                    <div className="select-style">
                      <select className="select-active">
                        <option>Bangladesh</option>
                        <option>Bahrain</option>
                        <option>Azerbaijan</option>
                        <option>Barbados</option>
                      </select>
                    </div>
                    <div className="select-style">
                      <select className="select-active">
                        <option>State / County</option>
                        <option>Bahrain</option>
                        <option>Azerbaijan</option>
                        <option>Barbados</option>
                      </select>
                    </div>
                    <div className="input-style">
                      <input type="text" placeholder="Town / City" />
                    </div>
                    <div className="input-style">
                      <input type="text" placeholder="Postcode / ZIP" />
                    </div>
                    <div className="calculate-discount-btn">
                      <a className="btn btn-link" href="#/">
                        Update
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="cart-calculate-discount-wrap mb-40">
                  <h4>Coupon Discount</h4>
                  <div className="calculate-discount-content">
                    <p>Enter your coupon code if you have one.</p>
                    <div className="input-style">
                      <input type="text" placeholder="Coupon code" />
                    </div>
                    <div className="calculate-discount-btn">
                      <a className="btn btn-link" href="#/">
                        Apply Coupon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="grand-total-wrap">
                  <div className="grand-total-content">
                    <h3>
                      Subtotal{" "}
                      <span>
                        $
                        {cartItems
                          .reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </h3>
                    <div className="grand-shipping">
                      <span>Shipping</span>
                      <ul>
                        <li>
                          <input
                            type="radio"
                            name="shipping"
                            value="info"
                            checked
                          />
                          <label>Free shipping</label>
                        </li>
                        <li>
                          <input type="radio" name="shipping" value="info" />
                          <label>
                            Flat rate: <span>$100.00</span>
                          </label>
                        </li>
                        <li>
                          <input type="radio" name="shipping" value="info" />
                          <label>
                            Local pickup: <span>$120.00</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="shipping-country">
                      <p>Shipping to Bangladesh</p>
                    </div>
                    <div className="grand-total">
                      <h4>
                        Total{" "}
                        <span>
                          $
                          {(
                            cartItems.reduce(
                              (acc, item) => acc + item.price * item.quantity,
                              0
                            ) + 100
                          ).toFixed(2)}
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="grand-total-btn">
                    <a className="btn btn-link" href="shop-checkout.html">
                      Proceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
