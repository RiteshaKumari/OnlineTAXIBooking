import React from 'react'
import { useLocation } from "react-router-dom";

function VehicleDetail() {
  const location = useLocation();
  const vid = location.state?.vid; // Retrieve vid safely using optional chaining

  console.log("Your vid:", vid); 
  return (
    <>
  {/* Start main-content */}
  <section
    className="page-title"
    style={{ backgroundImage: "url(images/background/page-title.png)" }}
  >
    <div className="auto-container">
      <div className="title-outer text-center">
        <h1 className="title">Vehicle Details</h1>
        <ul className="page-breadcrumb">
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li>Driver Details</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/*vehicle Details Start*/}
  <section className="team-details">
    <div className="" />
    <div className="container pb-100">
      <div className="team-details__top pb-70">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-left">
              <div className="team-details__top-img">
                <img src="images/resource/team-details.jpg" alt="img1" />
                <div className="team-details__big-text" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-right">
              <div className="team-details__top-content">
                <h3 className="team-details__top-name">Aleesha Brown</h3>
                <p className="team-details__top-title">
                  {/* Managing Director &amp; CEO */}
                </p>
                <p className="team-details__top-text-1">
                  {/* I help my clients stand out and they help me grow. */}
                </p>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Email Address</h5>
                  <div className="">
                    <span>
                      <a
                        href="https://html.kodesolution.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c5aba0a0a1ada0a9b585bcaab0b7a1aaa8a4acabeba6aaa8"
                      >
                        [email&nbsp;protected]
                      </a>
                    </span>
                  </div>
                </div>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Phone Number</h5>
                  <div className="">
                    <span>+012-3456-789</span>
                  </div>
                </div>
                <div className="team-details-contact">
                  <h5 className="mb-0">Web Address</h5>
                  <div className="">
                    <span>www.yourdomain.com</span>
                  </div>
                </div>
                <div className="team-details__social">
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-facebook" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-pinterest-p" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <a href="/booking"> <button type="reset" className="theme-btn btn-style-one">
               <span className="btn-title">Book Now</span>
              </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  </section>
  {/*Vehicle Details End*/}



 
</>

  )
}

export default VehicleDetail
