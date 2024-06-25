import React, { useState } from "react";
import HeadPageNav from "./HeadPageNav";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart);

  const toggleCouponContent = (e) => {
    e.preventDefault();
    setIsCouponVisible(!isCouponVisible);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <>
      <main className="main-content">
        <HeadPageNav title="Checkout" />

        <section className="product-area shop-checkout-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="section-title text-center">
                  <h2 className="title">Checkout</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="checkout-coupon-wrap mb-65 mb-md-40">
                  <p className="cart-page-title">
                    <i className="ion-ios-pricetag-outline"></i> Have a coupon?{" "}
                    <a
                      className="checkout-coupon-active"
                      onClick={toggleCouponContent}
                    >
                      Click here to enter your code
                    </a>
                  </p>
                  <div
                    className="checkout-coupon-content"
                    style={{ display: isCouponVisible ? "block" : "none" }}
                  >
                    <form action="#">
                      <p>If you have a coupon code, please apply it below.</p>
                      <input type="text" placeholder="Coupon code" />
                      <button type="submit">Apply coupon</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          First name{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Last name{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Company name (optional){" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-select mb-20">
                        <label>
                          Country / Region{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <div className="select-style">
                          <select className="select-active">
                            <option>Bangladesh</option>
                            <option>Bahrain</option>
                            <option>Azerbaijan</option>
                            <option>Barbados</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Street Address{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                        />
                        <input
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Town / City{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-select mb-20">
                        <label>
                          District{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <div className="select-style">
                          <select className="select-active">
                            <option>Select an option…</option>
                            <option>Barguna</option>
                            <option>Bandarban</option>
                            <option>Barbados</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Postcode / ZIP (optional){" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Phone{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="billing-info mb-20">
                        <label>
                          Email Address{" "}
                          <abbr className="required" title="required">
                            *
                          </abbr>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-account">
                    <input className="checkout-toggle" type="checkbox" />
                    <span>Ship to a different address?</span>
                  </div>
                  <div className="different-address open-toggle mt-30">
                    <div className="row">
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            First name{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Last name{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Company name (optional){" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-select mb-20">
                          <label>
                            Country / Region{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <div className="select-style">
                            <select className="select-active">
                              <option>Bangladesh</option>
                              <option>Bahrain</option>
                              <option>Azerbaijan</option>
                              <option>Barbados</option>
                              <option>Barbados</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Street Address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                          />
                          <input
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Town / City{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-select mb-20">
                          <label>
                            District{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <div className="select-style">
                            <select className="select-active">
                              <option>Select an option…</option>
                              <option>Barguna</option>
                              <option>Bandarban</option>
                              <option>Barbados</option>
                              <option>Barbados</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Postcode / ZIP (optional){" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Phone{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="billing-info mb-20">
                          <label>
                            Email Address{" "}
                            <abbr className="required" title="required">
                              *
                            </abbr>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="additional-info-wrap">
                    <label>Order notes (optional)</label>
                    <textarea
                      placeholder="Notes about your order, e.g. special notes for delivery. "
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap">
                    <div className="your-order-info-wrap">
                      <div className="your-order-title">
                        <h4>
                          Product <span>Subtotal</span>
                        </h4>
                      </div>
                      <div className="your-order-product">
                        {cartItems.map((item) => (
                          <ul key={item.id}>
                            <li>
                              {item.name} × {item.quantity}{" "}
                              <span>
                                ${(item.quantity * item.price).toFixed(2)}
                              </span>
                            </li>
                          </ul>
                        ))}
                      </div>
                      <div className="your-order-subtotal">
                        <h3>
                          Subtotal <span>${subtotal.toFixed(2)}</span>
                        </h3>
                      </div>
                      <div className="your-order-shipping">
                        <span>Shipping</span>
                        <ul>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="info"
                              checked="checked"
                            />
                            <label>Free shipping</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="info"
                              checked="checked"
                            />
                            <label>
                              Flat rate: <span>$100.00</span>
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="shipping"
                              value="info"
                              checked="checked"
                            />
                            <label>
                              Local pickup: <span>$120.00</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <h3>
                          Total <span>$617.59 </span>
                        </h3>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="pay-top sin-payment">
                        <input
                          id="payment_method_1"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          checked="checked"
                          name="payment_method"
                        />
                        <label for="payment_method_1">
                          {" "}
                          Direct Bank Transfer{" "}
                        </label>
                        <div className="payment-box payment_method_bacs">
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                      <div className="pay-top sin-payment">
                        <input
                          id="payment-method-2"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          name="payment_method"
                        />
                        <label for="payment-method-2">Check payments</label>
                        <div className="payment-box payment_method_bacs">
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                      </div>
                      <div className="pay-top sin-payment">
                        <input
                          id="payment-method-3"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          name="payment_method"
                        />
                        <label for="payment-method-3">Cash on delivery </label>
                        <div className="payment-box payment_method_bacs">
                          <p>Pay with cash upon delivery. </p>
                        </div>
                      </div>
                      <div className="pay-top sin-payment sin-payment-3">
                        <input
                          id="payment-method-4"
                          className="input-radio"
                          type="radio"
                          value="cheque"
                          name="payment_method"
                        />
                        <label for="payment-method-4">
                          PayPal{" "}
                          <img alt="" src="assets/img/icons/payment-3.png" />
                          <a href="#">What is PayPal?</a>
                        </label>
                        <div className="payment-box payment_method_bacs">
                          <p>
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="payment-condition">
                      <p>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <a href="#">privacy policy</a>.
                      </p>
                    </div>
                    <div className="payment-checkbox">
                      <input className="checkout-toggle" type="checkbox" />
                      <span>
                        Ship to a different address?{" "}
                        <a href="#">terms and conditions *</a>
                      </span>
                    </div>
                  </div>
                  <div className="place-order">
                    <a href="#/">Place Order</a>
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
