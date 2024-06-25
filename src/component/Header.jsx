import Logo from "../assets/images/logo/logo-light.png";
import logoLight from "../assets/images/logo/logo-light.png";
import cartItem from "../assets/images/shop/details/nav1.jpg";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopSubmenuOpen, setIsShopSubmenuOpen] = useState(false);
  const [isShopLayoutsSubmenuOpen, setIsShopLayoutsSubmenuOpen] =
    useState(false);
  const [isProductLayoutsSubmenuOpen, setIsProductLayoutsSubmenuOpen] =
    useState(false);
  const [isOtherPagesSubmenuOpen, setIsOtherPagesSubmenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  // Function to toggle cart modal
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Function to close cart modal
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleProductLayoutsSubmenu = () => {
    setIsProductLayoutsSubmenuOpen(!isProductLayoutsSubmenuOpen);
  };

  const toggleOtherPagesSubmenu = () => {
    setIsOtherPagesSubmenuOpen(!isOtherPagesSubmenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopSubmenu = () => {
    setIsShopSubmenuOpen(!isShopSubmenuOpen);
  };
  const toggleShopLayoutsSubmenu = () => {
    setIsShopLayoutsSubmenuOpen(!isShopLayoutsSubmenuOpen);
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header-middle">
          <div className="container">
            <div className="row row-gutter-0 align-items-center">
              <div className="col-12">
                <div className="header-align">
                  <div className="header-align-left">
                    <div className="header-logo-area">
                      <Link to="/">
                        <img className="logo-main" src={Logo} alt="Logo" />
                        <img
                          className="logo-light"
                          src={logoLight}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="header-align-center d-xl-block d-lg-block d-md-none"
                    id="main-search"
                  >
                    <div className="header-search-box">
                      <form action="#" method="post">
                        <div className="form-input-item">
                          <label htmlFor="search" className="sr-only">
                            Search Everything
                          </label>
                          <input
                            type="text"
                            id="search"
                            placeholder="Search Everything"
                          />
                          <button type="submit" className="btn-src">
                            <i className="pe-7s-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="header-align-right">
                    <div className="header-action-area">
                      <div className="header-action-wishlist">
                        <button className="btn-wishlist">
                          <i className="pe-7s-like"></i>
                        </button>
                      </div>
                      <div className="header-action-cart">
                        <button
                          className="btn-cart cart-icon"
                          onClick={toggleCart}
                        >
                          <span className="cart-count">{items.length}</span>
                          <i className="pe-7s-shopbag"></i>
                        </button>
                      </div>
                      <div className="header-action-user">
                        <Link to="/login">
                          <button className="btn-cart cart-icon">
                            <i className="fa fa-user"></i>
                          </button>
                        </Link>
                      </div>
                      <div className="header-menu-user">
                        <button
                          className="btn-menu d-xl-none d-lg-none d-md-block"
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                          <i className="ion-navicon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* home nav */}

        <div className="header-area header-default sticky-header">
          <div className="container">
            <div className="row row-gutter-0 align-items-center">
              <div className="col-4 col-sm-6 col-lg-2">
                <div className="header-logo-area">
                  <Link to="/">
                    <img className="logo-main" src={Logo} alt="Logo" />
                    <img className="logo-light" src={logoLight} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 sticky-md-none">
                <div className="header-navigation-area d-none d-md-none d-lg-block d-xl-block">
                  <ul className="main-menu nav position-relative">
                    <li className="active">
                      <Link to="/" className="ml--2">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/shop">Shop</Link>
                      <div className="mega-menu-dropdown submenu-nav">
                        <div className="row g-4">
                          <div className="col-lg-4">
                            <h4 className="mega-menu-title text-white fs-6">
                              Shop Layouts
                            </h4>
                            <ul className="mega-menu-list text-start my-4">
                              <li>
                                <Link to="">Shop 3 Column</Link>
                              </li>
                              <li>
                                <Link to="">Shop 4 Column</Link>
                              </li>
                              <li>
                                <Link to="">Shop Left Sidebar</Link>
                              </li>
                              <li>
                                <Link to="">Shop Right Sidebar</Link>
                              </li>
                              <li>
                                <Link to="">Shop No Sidebar</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <h4 className="mega-menu-title text-white fs-6">
                              Product Layouts
                            </h4>
                            <ul className="mega-menu-list text-start my-4">
                              <li>
                                <Link to="">Product Details</Link>
                              </li>
                              <li>
                                <Link to="">Product Variable</Link>
                              </li>
                              <li>
                                <Link to="">Product Grouped</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <h4 className="mega-menu-title text-white fs-6">
                              Other Pages
                            </h4>
                            <ul className="mega-menu-list text-start my-4">
                              <li>
                                <Link to="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link to="">Wishlist</Link>
                              </li>
                              <li>
                                <Link to="">Checkout</Link>
                              </li>
                              <li>
                                <Link to="">My Account</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="header-align-center mt-xl-0 mt-lg-0 mt-md-0 mt-3 mb-3 d-flex justify-content-center d-xl-none d-lg-none d-md-block"
                  id="search-box-md"
                >
                  <div className="header-search-box d-flex justify-content-center">
                    <form action="#" method="post">
                      <div className="form-input-item">
                        <label htmlFor="search" className="sr-only">
                          Search Everything
                        </label>
                        <input
                          type="text"
                          id="search"
                          placeholder="Search Everything"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-2">
                <div className="header-action-area">
                  <div
                    className="header-align-center d-flex justify-content-center"
                    id="sticky-search-box-md"
                  >
                    <div className="header-search-box d-flex justify-content-center align-items-center">
                      <form action="#" method="post">
                        <div className="form-input-item">
                          <label htmlFor="search" className="sr-only">
                            Search Everything
                          </label>
                          <input
                            type="text"
                            id="search"
                            placeholder="Search Everything"
                          />
                        </div>
                      </form>
                      <i
                        className="pe-7s-search fs-4"
                        style={{ position: "absolute", left: "92%" }}
                      ></i>
                    </div>
                  </div>
                  <div className="header-action-login">
                    <Link to="/login" className="btn-login">
                      <i className="pe-7s-users"></i>
                    </Link>
                  </div>
                  <div className="header-action-wishlist">
                    <button
                      className="btn-wishlist"
                      onClick={() => (window.location.href = "shop-wishlist")}
                    >
                      <i className="pe-7s-like"></i>
                    </button>
                  </div>
                  <div className="header-action-cart">
                    <button className="btn-cart cart-icon" onClick={toggleCart}>
                      <span className="cart-count">{items.length}</span>
                      <i className="pe-7s-shopbag"></i>
                    </button>
                  </div>
                  <button
                    className="btn-menu d-lg-none"
                    onClick={toggleMobileMenu}
                  >
                    <i className="ion-navicon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        <aside
          className={`sidebar-cart-modal ${
            isCartOpen ? "sidebar-cart-active" : ""
          }`}
        >
          <div className="sidebar-cart-inner">
            <div className="sidebar-cart-content">
              <a href="#/" className="cart-close" onClick={closeCart}>
                <i className="pe-7s-close"></i>
              </a>
              <div className="sidebar-cart-all">
                <div className="cart-header">
                  <h3>Shopping Cart</h3>
                  <div className="close-style-wrap">
                    <span className="close-style close-style-width-1 cart-close"></span>
                  </div>
                </div>
                <div className="cart-content cart-content-padding">
                  <ul>
                    {items.map((item) => (
                      <li className="single-product-cart" key={item.id}>
                        <div className="cart-img">
                          <a>
                            <img src={item.image} alt="" />
                          </a>
                        </div>
                        <div className="cart-title">
                          <h4>
                            <a>{item.name}</a>
                          </h4>
                          <span>
                            {item.quantity} ×{" "}
                            <span className="price">{item.price} </span>
                          </span>
                        </div>
                        <div className="cart-delete">
                          <a onClick={() => handleDelete(item.id)}>
                            <i className="pe-7s-trash icons"></i>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-total">
                    <h4>
                      Subtotal:{" "}
                      <span>
                        $
                        {items
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </h4>
                  </div>
                  <div className="cart-checkout-btn">
                    <Link className="cart-btn" to="/cart">
                      view cart
                    </Link>
                    <Link className="checkout-btn" to="/checkout">
                      checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Cart Overlay */}
        {isCartOpen && (
          <div className="sidebar-cart-overlay show" onClick={closeCart}></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu">
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              <i className="ion-android-close"></i>
            </button>
            <ul className="mobile-menu-list">
              <li>
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={toggleMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="has-submenu">
                <button onClick={toggleShopSubmenu}>
                  Shop <i className="fa fa-chevron-down"></i>
                </button>
                {isShopSubmenuOpen && (
                  <ul className="submenu">
                    <li className="has-submenu">
                      <button onClick={toggleShopLayoutsSubmenu}>
                        Shop Layouts <i className="fa fa-chevron-down"></i>
                      </button>
                      {isShopLayoutsSubmenuOpen && (
                        <ul className="submenu">
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Shop 3 Column
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Shop 4 Column
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Shop Left Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Shop Right Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Shop No Sidebar
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="has-submenu">
                      <button onClick={toggleProductLayoutsSubmenu}>
                        Product Layouts <i className="fa fa-chevron-down"></i>
                      </button>
                      {isProductLayoutsSubmenuOpen && (
                        <ul className="submenu">
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Product Details
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Product Variable
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Product Grouped
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="has-submenu">
                      <button onClick={toggleOtherPagesSubmenu}>
                        Other Pages <i className="fa fa-chevron-down"></i>
                      </button>
                      {isOtherPagesSubmenuOpen && (
                        <ul className="submenu">
                          <li>
                            <Link to="/cart" onClick={toggleMobileMenu}>
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link to="" onClick={toggleMobileMenu}>
                              My Account
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
