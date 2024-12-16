import React from 'react'

function Team() {
  return (
    <>
    {/* Team Section */}
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-icon" />
          <span className="sub-title">Our Expert Drivers</span>
          <h2 className="letters-slide-up text-split">Meet Our Drivers</h2>
        </div>
        <div className="row">
          {/* Team Block */}
          <div className="team-block col-lg-4 col-md-6" data-aos="fade-up">
            <div className="inner-box">
              <div className="content">
                <h4 className="name">
                  <a href="page-team-details.html">Tricia Gibney</a>
                </h4>
                <div className="designation">President, Manager</div>
                {/* Info Btn */}
                <a href="tel:380503184707" className="info-btn">
                  {" "}
                  <i className="icon fal fa-mobile" />{" "}
                  <strong>(+380) 50 318 47 07</strong>{" "}
                </a>
              </div>
              <figure className="image">
                <img src="images/resource/team1-1.jpg" alt="Image1" />
              </figure>
              <ul className="social-icon-two">
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Team Block */}
          <div
            className="team-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="inner-box">
              <div className="content">
                <h4 className="name">
                  <a href="page-team-details.html">Thomas Walker</a>
                </h4>
                <div className="designation">President, Manager</div>
                {/* Info Btn */}
                <a href="tel:380503184707" className="info-btn">
                  {" "}
                  <i className="icon fal fa-mobile" />{" "}
                  <strong>(+380) 50 318 47 07</strong>{" "}
                </a>
              </div>
              <figure className="image">
                <img src="images/resource/team1-2.jpg" alt="Image1" />
              </figure>
              <ul className="social-icon-two">
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Team Block */}
          <div
            className="team-block col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="inner-box">
              <div className="content">
                <h4 className="name">
                  <a href="page-team-details.html">Roman Morko</a>
                </h4>
                <div className="designation">President, Manager</div>
                {/* Info Btn */}
                <a href="tel:380503184707" className="info-btn">
                  {" "}
                  <i className="icon fal fa-mobile" />{" "}
                  <strong>(+380) 50 318 47 07</strong>{" "}
                </a>
              </div>
              <figure className="image">
                <img src="images/resource/team1-3.jpg" alt="Image1" />
              </figure>
              <ul className="social-icon-two">
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="btn-box text-center">
            <a href="news-details.html" class="theme-btn btn-style-one"><span class="btn-title">View All</span></a>
          </div> */}
      </div>
    </section>
    {/* End Team Section */}
  </>
  
  )
}

export default Team
