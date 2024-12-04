import React from 'react'
import { Link } from 'react-router-dom';

const servicesectionthree = {
  padding: '120px 0 0px ',
}
const pricingsectionthree = {
  padding: '50px 0 90px',
}
function Service() {


  return (
    <>
  
  {/* Start main-content */}
  <section
    className="page-title"
    style={{ backgroundImage: "url(images/background/page-title.png)" }}
  >
    <div className="auto-container">
      <div className="title-outer text-center">
        <h1 className="title">Services</h1>
        <ul className="page-breadcrumb">
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/* Service Section */}
  <section className="service-section-three" style={servicesectionthree}>
    <div className="auto-container">
      <div className="row" data-aos="fade-left">
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-1.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-taxi-2" />
              </div>
              <div className="content">
                <h3 className="title">
                <Link to={`/servicedetail`}>
  Regular Transport
</Link>
                
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-2.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-mobile-app" />
              </div>
              <div className="content">
                <h3 className="title">
                <Link to={`/servicedetail`}>
                Business Transport
</Link>
                 
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-3.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-driver-3" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/servicedetail">Tour Transport</a>
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-1.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-taxi-2" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/servicedetail">Regular Transport</a>
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-2.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-mobile-app" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/servicedetail">Business Transport</a>
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Service Block */}
          <div className="service-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service3-3.jpg" alt="Image" />
                </figure>
                <i className="icon flaticon-driver-3" />
              </div>
              <div className="content">
                <h3 className="title">
                  <a href="/servicedetail">Tour Transport</a>
                </h3>
                <div className="text">
                  Curabitur ac quam aliquam vehic se ula semper sed vel elit et
                  seleo pur Curabitur ac quus.
                </div>
                <a
                  href="/servicedetail"
                  className="icon fa fa-angle-double-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Service Section */}

  {/* Pricing Section */}
  <section className="pricing-section-three" style={pricingsectionthree}>
  <div className="sec-title">
  <h2
    className="letters-slide-up text-split"
    style={{ opacity: 1, textAlign: 'center' }}
  >
    Pricing
  </h2>
</div>


    <div className="auto-container">
      <div className="row">
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Student Package</h6>
              <div className="price">
                $250 <sub>/mo</sub>
              </div>
              <i className="icon flaticon-price-tag" />
            </div>
            <div className="content">
              <ul className="feature-list">
                <li>
                  <i className="icon fal fa-check-circle" /> 02 Passangers
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> 5 kms Distance Only
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> No Extra Charges
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> Free Book No
                  Advance
                </li>
              </ul>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-three">
                  <span className="btn-title">Purchase Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Medical Package</h6>
              <div className="price">
                $410 <sub>/mo</sub>
              </div>
              <i className="icon flaticon-price-tag" />
            </div>
            <div className="content">
              <ul className="feature-list">
                <li>
                  <i className="icon fal fa-check-circle" /> 02 Passangers
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> 5 kms Distance Only
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> No Extra Charges
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> Free Book No
                  Advance
                </li>
              </ul>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-three">
                  <span className="btn-title">Purchase Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Business Package</h6>
              <div className="price">
                $730 <sub>/mo</sub>
              </div>
              <i className="icon flaticon-price-tag" />
            </div>
            <div className="content">
              <ul className="feature-list">
                <li>
                  <i className="icon fal fa-check-circle" /> 02 Passangers
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> 5 kms Distance Only
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> No Extra Charges
                </li>
                <li>
                  <i className="icon fal fa-check-circle" /> Free Book No
                  Advance
                </li>
              </ul>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-three">
                  <span className="btn-title">Purchase Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Pricing Section */}
</>


  )
}

export default Service
