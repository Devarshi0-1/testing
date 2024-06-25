import { Link } from "react-router-dom";

export default function HeadPageNav({ title }) {
  return (
    <>
      <section className="page-title-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 m-auto">
              <div className="page-title-content text-center">
                <h2 className="title">{title}</h2>
                <div className="bread-crumbs">
                  <Link to="/"> Home </Link>
                  <span className="breadcrumb-sep"> // </span>
                  <span className="active"> {title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
