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
    {/* About Section */}
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div
            className="content-column col-lg-6 order-lg-2"
            data-aos="fade-left"
          >
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Welcome to our company</span>
                <h2 className="letters-slide-up text-split">
                  Feel the difference and Relaxation!
                </h2>
                <div className="text">
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master new technologies. Our
                  portfolio includes dozens of successfully completed projects of
                  houses of different storeys,
                </div>
              </div>
              <ul className="list-style-two">
                <li>We successfully cope with tasks of varying complexity.</li>
                <li>Long-term gurantees and regularly</li>
                <li>Master new technologies.</li>
              </ul>
              <div className="bottom-box">
                {/* Info Btn */}
                <a href="tel:5267214392" className="info-btn">
                  <small>Call For Taxi</small>
                  <strong>5267-214-392</strong>
                </a>
                <div className="author-box">
                  <div className="author-image">
                    <img src="images/resource/about1-thumb1.jpg" alt="Image" />
                  </div>
                  <div className="author-info">
                    <h6 className="name">Thomas Walker</h6>
                    <span className="designation">Founder - CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6">
            <div className="inner-column">
              <figure className="image reveal">
                <img src="images/resource/about1-1.jpg" alt="Image" />
              </figure>
              <figure className="image-2 reveal">
                <img src="images/resource/about1-2.jpg" alt="Image" />
              </figure>
              <div className="video-box" data-aos="fade-up">
                <figure className="image">
                  <img src="images/resource/about1-3.jpg" alt="Image" />
                </figure>
                <a
                  href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                  className="play-btn"
                  data-fancybox=""
                  data-caption=""
                >
                  <div className="icon-triangle fas fa-caret-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Emd About Section */}
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
  </>
  
  )
}

export default About
