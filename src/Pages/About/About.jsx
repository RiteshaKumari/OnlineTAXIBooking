import React from 'react'

function About() {
  return (
    <>
    {/* Start main-content */}
    <section
      className="page-title"
      style={{ backgroundImage: "url(images/background/page-title.png)" }}
    >
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">About Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
    {/* end main-content */}
   
 {/* Work Section */}
 <section className="work-section pt-0">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-icon" />
          <span className="sub-title">Order Taxi Online</span>
          <h2 className="letters-slide-up text-split">How It Works</h2>
        </div>
        <div className="row">
          {/* Work Block */}
          <div className="work-block col-lg-4 col-md-6" data-aos="fade-up">
            <div className="inner-box">
              <i className="icon flaticon-taxi" />
              <div className="content">
                <h4 className="title">
                  Book in Just <br />2 Tabs
                </h4>
                <div className="text">
                  Curabitur ac quam aliquam vehicula semper sed vel elit et leo
                  purus.
                </div>
              </div>
            </div>
          </div>
          {/* Work Block */}
          <div
            className="work-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="inner-box">
              <i className="icon flaticon-mobile-app" />
              <div className="content">
                <h4 className="title">Track your driver</h4>
                <div className="text">
                  Curabitur ac quam aliquam vehicula semper sed vel elit et leo
                  purus.
                </div>
              </div>
            </div>
          </div>
          {/* Work Block */}
          <div
            className="work-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="inner-box">
              <i className="icon flaticon-taxi-6" />
              <div className="content">
                <h4 className="title">Pick &amp; arrive safely</h4>
                <div className="text">
                  Curabitur ac quam aliquam vehicula semper sed vel elit et leo
                  purus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Work Section */}
 <style>
  {`
  .work-section .sec-title {
    margin-bottom: 85px;
    padding-top: 20px;
}
  `}
 </style>


 
   
  </>
  
  )
}

export default About
