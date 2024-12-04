import React from 'react'

function Footer() {
  return (
<>
  {/* Main Footer */}
  <footer className="main-footer footer-style-two">
    <div className="bg bg-pattern-4" />
    {/* Footer Top */}
    <div className="footer-top">
      <div className="auto-container">
        <div className="inner-container">
          <div className="top-left">
            <div className="logo-box">
              <div className="logo">
                <a href="index-2.html">
                  <img src="images/logo-2.png" alt="Logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="top-center">
            <div className="text">
              Authoritatively simplify open-source resources via backend
              visualize business e-markets before parallel.
            </div>
          </div>
          <div className="top-right">
            <div className="info-btn">
              <i className="icon fal fa-mobile" />
              <div className="content">
                <h5 className="title">call for taxi</h5>
                <a href="#" className="phone-no">
                  5267-214-392
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Widgets Section */}
    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">
          {/* Footer Column */}
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget about-widget">
              <h5 className="widget-title">Download Mobile App</h5>
              <div className="widget-content">
                <div className="text">
                  Competently re-engineer cross-media breed meta-services
                </div>
                <div className="btn-box">
                  <a href="#" className="image">
                    <img src="images/icons/google-play-2.png" alt="Image" />
                  </a>
                  <a href="#" className="image">
                    <img src="images/icons/app-store-2.png" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer COlumn */}
          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget links-widget">
              <h4 className="widget-title">Useful Links</h4>
              <div className="widget-content">
                <ul className="user-links two-column">
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">About</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Get a Cab</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Our Vehicles</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Our News</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Package</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Column */}
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
            <div className="footer-widget newsletter-widget">
              <h4 className="widget-title">Newsletter</h4>
              <div className="widget-content">
                <div className="text">
                  Signup for our weekly newsletter or updates.
                </div>
                <div className="newsletter-form">
                  <form method="post" action="#">
                    <div className="form-group">
                      <div className="input-outer">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your email."
                          required=""
                        />
                      </div>
                      <button
                        type="button"
                        className="theme-btn btn-style-one dark-line-two hover-light"
                      >
                        <span className="btn-title">Subscribe</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  Footer Bottom */}
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">
            © Copyright Taxix Reserved By Kodesolution.
          </div>
          <ul className="footer-nav">
            <li>
              <a href="#">
                <i className="fab fa-facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" /> Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/*End Main Footer */}
</>

  )
}

export default Footer
