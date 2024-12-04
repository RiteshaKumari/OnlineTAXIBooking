import React from 'react'


function Service() {
  return (
  <>
  {/* Service Section */}
  <section className="service-section">
    <div className="auto-container">
      <div className="outer-box">
        <div className="row">
          {/* Service Block */}
          <div className="service-block col-lg-4 col-md-6" data-aos="fade-up">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service1-1.jpg" alt="Image1" />
                  
                </figure>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="page-service-details.html">Business Transfer</a>
                </h4>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean
                  sollicitudi, lorem bibendum auctor.
                </div>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div
            className="service-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service1-2.jpg" alt="Image2" />
                </figure>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="page-service-details.html">Online Booking</a>
                </h4>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean
                  sollicitudi, lorem bibendum auctor.
                </div>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div
            className="service-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src="images/resource/service1-3.jpg" alt="Image3" />
                </figure>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="page-service-details.html">City Transport</a>
                </h4>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean
                  sollicitudi, lorem bibendum auctor.
                </div>
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
