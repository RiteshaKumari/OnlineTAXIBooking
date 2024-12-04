import React from 'react'

function Booking() {
  return (
    <>
    {/* Booking Section */}
    <section className="booking-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: "url(images/background/1.jpg)" }}
      />
      <div className="bg-overlay" />
      <div className="auto-container">
        {/* Booking Form */}
        <div className="booking-form">
          <div className="sec-title">
            <h2 className="letters-slide-up text-split">Book Your Taxi Ride!</h2>
            <div className="text">
              To get the ride of your taxi please select from the following:
            </div>
          </div>
          <form method="get" action="#">
            <div className="row">
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <select className="custom-select">
                  <option value="">Choose Taxi Type</option>
                  <option value="">Hybrid Tax</option>
                  <option value="">Town Taxi</option>
                  <option value="">SUV Taxi</option>
                  <option value="">Limousine Taxi</option>
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <div className="input-outer">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Start Destination"
                    required=""
                  />
                  <i className="icon fal fa-map-marker-alt" />
                </div>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <div className="input-outer">
                  <input
                    type="text"
                    name="destination"
                    placeholder="End Destination"
                    required=""
                  />
                  <i className="icon fal fa-map-marker-alt" />
                </div>
              </div>
              {/* button Box */}
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <div className="boxed-outer-box">
                  <div className="boxed">
                    <input
                      type="radio"
                      id="android"
                      name="skills"
                      defaultValue="Single"
                      defaultChecked=""
                    />
                    <label htmlFor="android">Single</label>
                  </div>
                  <div className="boxed">
                    <input
                      type="radio"
                      id="ios"
                      name="skills"
                      defaultValue="Family"
                    />
                    <label htmlFor="ios">Family</label>
                  </div>
                </div>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="name"
                  placeholder="Complete Name"
                  required=""
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <div className="input-outer">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Phone No"
                    required=""
                  />
                  <i className="icon fal fa-mobile" />
                </div>
              </div>
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="theme-btn btn-style-one">
                  <span className="btn-title">Find a Taxi</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    {/* End Booking Section */}
        {/* Fun Fact Section */}
        <section className="funfact-section">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row">
            {/* Counter Block */}
            <div className="counter-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-connected-car" />
                </div>
                <div className="counter-one">
                  <span className="odometer" data-count={32002} />
                </div>
                <h4 className="counter-text">Special Vehicles</h4>
              </div>
            </div>
            {/* Counter Block */}
            <div className="counter-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="icon-box two">
                  <i className="icon flaticon-destination" />
                </div>
                <div className="counter-one">
                  <span className="odometer" data-count={16008} />
                </div>
                <h4 className="counter-text">Road Trips Done</h4>
              </div>
            </div>
            {/* Counter Block */}
            <div className="counter-block col-lg-4 col-md-6">
              <div className="inner-box">
                <div className="icon-box three">
                  <i className="icon flaticon-location" />
                </div>
                <div className="counter-one">
                  <span className="odometer" data-count={17068} />
                </div>
                <h4 className="counter-text">People Dropped</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Fun Fact Section */}
  </>
  
  
  )
}

export default Booking
