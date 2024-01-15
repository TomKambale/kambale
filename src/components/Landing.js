import React from "react";
import Coding from "../assets/Coding.jpg";
import thomas from "../assets/Thomas.png";
import Relax from "../assets/Relax.jpg";

function Landing() {
  return (
    <div className="landing">
      {" "}
      <div className="container text-center">
        <div className="row align-items-end ">
          <div className="col">SOFTWARE ENGINEER</div>
          <div className="col">I.T</div>
          <div className="col">TECH ENTHUSIAST</div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Coding}
                  className="d-block w-100"
                  alt="Kambale"
                  width={500}
                  height={500}
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Software development</h5>
                  <p>Problem sloving using technology.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={thomas}
                  className="d-block w-100"
                  alt="Thomas"
                  width={500}
                  height={500}
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Unwind</h5>
                  <p>
                    All work and no play makes Jack a dull boy. We all need a
                    comfortable work-life balance.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={Relax}
                  className="d-block w-100"
                  alt="Maghanga"
                  width={500}
                  height={500}
                ></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Unwind</h5>
                  <p>
                    All work and no play makes Jack a dull boy. We all need a
                    comfortable work-life balance.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
