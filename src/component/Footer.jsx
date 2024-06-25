import logo from "../assets/images/logo/logo-light.png";
import payment from "../assets/images/photos/payment1.png";
import texmithLogo from "../assets/images/texmith-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Start Footer Area Wrapper */}
      <footer className="footer-area default-style">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-3">
                <div className="widget-item item-style3">
                  <div className="about-widget">
                    <a className="footer-logo" href="index.html">
                      <img src={logo} alt="Logo" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consecl elit, sed do eiusmod
                      teml incididunt ut labore et dolore magna aliqua Ut enim
                    </p>
                    <div className="widget-social-icons">
                      <a href="#">
                        <i className="ion-social-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ion-social-tumblr"></i>
                      </a>
                      <a href="#">
                        <i className="ion-social-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ion-social-instagram-outline"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="widget-item item-style1">
                  <h4 className="widget-title">Quick Links</h4>
                  <h4
                    className="widget-title widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dividerId-1"
                  >
                    Quick Links
                  </h4>
                  <div
                    id="dividerId-1"
                    className="collapse widget-collapse-body"
                  >
                    <nav className="widget-menu-wrap">
                      <ul className="nav-menu nav item-hover-style">
                        <li>
                          <Link to="/about">- About</Link>
                        </li>
                        <li>
                          <Link to="/products">- Products</Link>
                        </li>
                        <li>
                          <Link to="/contact">- Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="widget-item item-style1">
                  <h4 className="widget-title">Other Page</h4>
                  <h4
                    className="widget-title widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dividerId-2"
                  >
                    Other Page
                  </h4>
                  <div
                    id="dividerId-2"
                    className="collapse widget-collapse-body"
                  >
                    <nav className="widget-menu-wrap item-hover-style">
                      <ul className="nav-menu nav">
                        <li>
                          <a href="about.html  ">- About</a>
                        </li>
                        <li>
                          <a href="blog.html">- Blog</a>
                        </li>
                        <li>
                          <a href="index.html">- Speakers</a>
                        </li>
                        <li>
                          <a href="contact.html">- Contact</a>
                        </li>
                        <li>
                          <a href="index.html">- Tricket</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-2">
                <div className="widget-item item-style2">
                  <h4 className="widget-title">Company</h4>
                  <h4
                    className="widget-title widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dividerId-3"
                  >
                    Company
                  </h4>
                  <div
                    id="dividerId-3"
                    className="collapse widget-collapse-body"
                  >
                    <nav className="widget-menu-wrap item-hover-style">
                      <ul className="nav-menu nav">
                        <li>
                          <a href="index.html">- Jesco</a>
                        </li>
                        <li>
                          <a href="shop.html">- Shop</a>
                        </li>
                        <li>
                          <a href="contact.html">- Contact us</a>
                        </li>
                        <li>
                          <a href="login-register.html">- Log in</a>
                        </li>
                        <li>
                          <a href="index.html">- Help</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-3">
                <div className="widget-item">
                  <h4 className="widget-title">Store Information</h4>
                  <h4
                    className="widget-title widget-collapsed-title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dividerId-4"
                  >
                    Store Information
                  </h4>
                  <div
                    id="dividerId-4"
                    className="collapse widget-collapse-body"
                  >
                    <p className="widget-address">
                      2005 Your Address Goes Here.
                      <br />
                      896, Address 10010, HGJ
                    </p>
                    <ul className="widget-contact-info">
                      <li>
                        Phone/Fax: <a href="tel://0123456789">0123456789</a>
                      </li>
                      <li>
                        Email:{" "}
                        <a href="mailto://demo@example.com">demo@example.com</a>
                      </li>
                    </ul>
                    <div className="widget-payment-info">
                      <div className="thumb">
                        <a href="index.html">
                          <img src={payment} alt="Payment Methods" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="row text-center">
                <div className="col-sm-12">
                  <div className="widget-copyright">
                    <p>
                      Powered by :
                      <a href="https://texmith.com/" target="_blank">
                        <img
                          src={texmithLogo}
                          alt="texmith infotech"
                          width={100}
                          className="mx-2"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-shape bg-img"
          style={{ backgroundImage: `url(assets/images/photos/footer1.png)` }}
        ></div>
      </footer>
      {/* End Footer Area Wrapper */}

      {/* Scroll Top Button */}
      <div className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        <span className="fa fa-angle-double-up"></span>
      </div>
    </>
  );
}
