import banner from "../assets/images/divider/shape1.png";
import child1 from "../assets/images/divider/1.png";
import child2 from "../assets/images/divider/2.png";
export default function Discountsection() {
  return (
    <>
      <section
        className="divider-area divider-style1-area bg-img"
        data-bg-img="assets/images/divider/bg1.png"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="divider-content">
                <h2 className="title">Deal Of The Day</h2>
                <p>
                  <span>UPTO 35% OFF </span> On All Other Baby Products
                </p>
                <div className="countdown-content">
                  <ul className="countdown-timer">
                    <li>
                      <span className="days">00</span>
                      <p className="days_text">Days</p>
                    </li>
                    <li>
                      <span className="hours">00</span>
                      <p className="hours_text">Hours</p>
                    </li>
                    <li>
                      <span className="minutes">00</span>
                      <p className="minutes_text">MINUTES</p>
                    </li>
                    <li>
                      <span className="seconds">00</span>
                      <p className="seconds_text">SECONDS</p>
                    </li>
                  </ul>
                </div>
                <a className="btn-theme" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="shape-group">
            <div className="shape-style3">
              <img src={child1} alt="Image" />
            </div>
            <div className="shape-style4">
              <img src={child2} alt="Image" />
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-style1" data-bg-img={banner}></div>
          <div className="shape-style2" data-bg-img={banner}></div>
        </div>
      </section>
    </>
  );
}
