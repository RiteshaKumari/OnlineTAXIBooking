import React from 'react'
import { Link } from 'react-router-dom';

const servicesectionthree = {
  padding: '120px 0 0px ',
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
                  <img src="images/resource/service3-1.jpg" alt="Image1" />
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
                ></a>
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
                  <img src="images/resource/service3-2.jpg" alt="Image2" />
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
                  ></a>
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
                  <img src="images/resource/service3-3.jpg" alt="Image3" />
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
                  ></a>
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
                  <img src="images/resource/service3-1.jpg" alt="Image4" />
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
                  <img src="images/resource/service3-2.jpg" alt="Image5" />
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
                  <img src="images/resource/service3-3.jpg" alt="Image6" />
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


</>


  )
}

export default Service
