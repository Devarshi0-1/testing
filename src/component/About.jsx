import shape3 from "../assets/images/divider/shape3.png";
import shape4 from "../assets/images/divider/4.png";
// import BrandLogo from './BrandLogo'
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* <!--wrapper start--> */}

      <main className="main-content">
        <section className="page-title-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 m-auto">
                <div className="page-title-content text-center">
                  <h2 className="title">About Us</h2>
                  <div className="bread-crumbs">
                    <Link to="/"> Home </Link>
                    <span className="breadcrumb-sep"> // </span>
                    <span className="active"> About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--== Start Divider Area Wrapper ==--> */}
        <section className="divider-area divider-style3-area">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="thumb">
                  <img src={shape4} alt="Image" width={"100%"} />
                  <div className="shape-group">
                    <div className="shape-style1">
                      <img src={shape3} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="divider-content">
                  <h4 className="subtitle">Hello there!</h4>
                  <h2 className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    dolo
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmo temp incidi ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam quis nostru exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duislpl
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugial nulla pariatur. Excepteur sint
                    occaecat.
                  </p>
                  <Link to="/contact" className="btn-theme">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--== End Divider Area Wrapper ==--> */}

        {/* <BrandLogo/>     */}

        <Testimonial />
      </main>
    </>
  );
}
