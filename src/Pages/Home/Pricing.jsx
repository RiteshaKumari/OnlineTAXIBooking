import React from 'react'
const pricingsectionthree = {
    padding: '50px 0 90px',
  }
function Pricing() {
  return (
    <div>
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
    </div>
  )
}

export default Pricing
