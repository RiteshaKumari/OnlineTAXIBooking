import React from 'react'

function Benefit() {
  return (
    <>
  {/* Benefit Section */}
  <section className="benefit-section">
    <div className="bg bg-pattern-3" />
    <div className="auto-container">
      <div className="sec-title">
        <span className="sub-title">Main Features</span>
        <h2 className="letters-slide-up text-split">Our Benefits</h2>
      </div>
      <div className="row">
        {/* Blocks Column */}
        <div
          className="blocks-column col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-right"
        >
          <div className="inner-column">
            {/* Benefit Block */}
            <div className="benefit-block">
              <div className="inner-box">
                <i className="icon flaticon-accept" />
                <div className="content">
                  <h3 className="title">Fixed Price</h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, cons auctor aliquet. Aenean
                    sollicitudi, bibendum auctor.
                  </div>
                </div>
              </div>
            </div>
            {/* Benefit Block */}
            <div className="benefit-block">
              <div className="inner-box">
                <i className="icon flaticon-accept" />
                <div className="content">
                  <h3 className="title">Safe Gurantee</h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, cons auctor aliquet. Aenean
                    sollicitudi, bibendum auctor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Column */}
        <div className="image-column col-lg-4 col-md-12 col-sm-12">
          <div className="inner-column">
            <figure className="image reveal overlay-anim tm-gsap-img-parallax overflow-hidden">
              <img src="images/resource/benefit1-1.jpg" alt="Image1" />
            </figure>
          </div>
        </div>
        {/* Blocks Column */}
        <div
          className="blocks-column style-two col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-left"
        >
          <div className="inner-column">
            {/* Benefit Block */}
            <div className="benefit-block">
              <div className="inner-box">
                <i className="icon flaticon-accept" />
                <div className="content">
                  <h3 className="title">Fast Pickups</h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, cons auctor aliquet. Aenean
                    sollicitudi, bibendum auctor.
                  </div>
                </div>
              </div>
            </div>
            {/* Benefit Block */}
            <div className="benefit-block">
              <div className="inner-box">
                <i className="icon flaticon-accept" />
                <div className="content">
                  <h3 className="title">Quick Ride</h3>
                  <div className="text">
                    Lorem ipsum dolor sit amet, cons auctor aliquet. Aenean
                    sollicitudi, bibendum auctor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Benefits Section */}
</>

  )
}

export default Benefit
