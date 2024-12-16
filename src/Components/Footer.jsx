import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';

function Footer() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = Cookies.get('xyzra'); // Get the email cookie
    if (userEmail) {
      setIsLoggedIn(true); // If cookie exists, set user as logged in
    } else {
      setIsLoggedIn(false); // If no cookie, set user as not logged in
    }
  }, []); 
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
                <a href="/">
                <img 
  src="images/CustomImage/Logo.png" 
  alt="Logo" 
  style={{
    display: "inline-block",
    maxWidth: "100%",
    height: "86px",
    marginRight: "10px"
  }} 
/>
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
                <a href="#!" className="phone-no">
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
                  <a href="#!" className="image">
                    <img src="images/icons/google-play-2.png" alt="Image1" />
                  </a>
                  <a href="#!" className="image">
                    <img src="images/icons/app-store-2.png" alt="Image2" />
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
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="/service">Services</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="/vehicle">Our Vehicles</a>
                  </li>
                  <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="/contact">Contact</a>
                  </li>
                  {/* <li>
                    <i className="icon fa fa-angle-double-right" />{" "}
                    <a href="/signup">Signup</a>
                  </li> */}
               {isLoggedIn ? (
        <li>
          <i className="icon fa fa-angle-double-right" />{" "}
          <a href="/admindashboard">AdminDashboard</a>
        </li>
      ) : (
        <li>
          <i className="icon fa fa-angle-double-right" />{" "}
          <a href="/signin">Login</a>
        </li>
      )}
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Column */}
          <div className="footer-column col-lg-4 col-md-6 col-sm-12">
  <div className="footer-widget links-widget">
    <h5 className="widget-title">Contact Info</h5>
    <div className="widget-content">
      <ul className="contact-list-two light">
        <li>
          <i className="fal fa-map-marker-alt" />
          25 Street, 145 City Road New <br />
          Town DD14, USA
        </li>
        <li>
          <i className="fal fa-mobile" />{" "}
          <a href="tel:380503184707">(+380) 50 318 47 07</a>
        </li>
        <li>
          <i className="fal fa-envelope-open" />{" "}
          <a href="mailto:needhelp@company.com">username@domain.com</a>
        </li>
      </ul>
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
            © Developed By techuniverse and Ritesha Kumari.
          </div>
          <ul className="footer-nav">
            <li>
              <a href="#!">
                <i className="fab fa-facebook" /> Facebook
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-twitter" /> Twitter
              </a>
            </li>
            <li>
              <a href="#!">
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
