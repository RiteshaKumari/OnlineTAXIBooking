import React from 'react'

function Header() {
  return (
    <>
    {/* Main Header*/}
    <header className="main-header header-style-one ">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="top-left">
              {/* Info List */}
              <ul className="list-style-one">
                <li>
                  <i className="fal fa-mobile" />{" "}
                  <a href="tel:0123456789">+92 8475 904950</a>
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#!432a2d252c03222d2c2137223b2a6d202c2e">
                    <span
                      className="__cf_email__"
                      data-cfemail="442d2a222b04252a2b266930253c2d6a272b29"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="social-icon-one">
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
                <li>
                  <a href="#!">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Top */}
      <div className="header-lower">
        <div className="auto-container">
          {/* Main box */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <a href="/">
                  <img src="images/logo-2.png" alt="Logo" />
                </a>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="current dropdown">
                    <a href="/">Home</a>
                 
                  </li>
                  <li className="dropdown">
                    <a href="/about">About</a>
                  
                  </li>
                  <li className="dropdown">
                    <a href="/service">Service</a>
                 
                  </li>
                
                  <li className="dropdown">
                    <a href="/Vehicle">Taxi List</a>
                  </li>
                 
                  <li>
                    <a href="/contact">Contact</a>
                    
                  </li>
                </ul>
              </nav>
            </div>
            {/* Main Menu End*/}
            {/* Outer Box */}
            <div className="outer-box">
              {/* Search Btn */}
              <button className="ui-btn search-btn light">
                <span className="icon lnr lnr-icon-search" />
              </button>
              {/* Btn Box */}
              <div className="btn-box">
                <a
                  href="/contact"
                  className="theme-btn btn-style-one dark-line-two hover-light"
                >
                  <span className="btn-title">Contact Us</span>
                </a>
              </div>
              {/* Mobile Nav toggler */}
              <div className="mobile-nav-toggler light">
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="index-2.html">
                <img src="images/logo-2.png" alt="" title="" />
              </a>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times" />
            </div>
          </div>
          <ul className="navigation clearfix">
            {/*Keep This Empty / Menu will come through Javascript*/}
          </ul>
          <ul className="contact-list-one light">
            <li>
              <i className="icon lnr-icon-phone-handset" />{" "}
              <span className="title">Call Now</span>
              <div className="text">
                <a href="tel:+92880098670">+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              <i className="icon lnr-icon-envelope1" />{" "}
              <span className="title">Send Email</span>
              <div className="text">
                <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#!f8909d9488b89b979588999681d69b9795">
                  <span
                    className="__cf_email__"
                    data-cfemail="2d4548415d6d4e42405d4c4354034e4240"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </div>
            </li>
            <li>
              <i className="icon lnr-icon-map-marker" />{" "}
              <span className="title">Address</span>
              <div className="text">66 Broklyant, New York India 3269</div>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="#!">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Mobile Menu */}
      {/* Header Search */}
      <div className="search-popup">
        <span className="search-back-drop" />
        <button className="close-search">
          <span className="fa fa-times" />
        </button>
        <div className="search-inner">
          <form
            method="post"
            action="https://html.kodesolution.com/2024/taxix-html/blog-showcase.html"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search..."
                required=""
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* End Header Search */}
      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            {/*Logo*/}
            <div className="logo">
              <a href="index-2.html" title="">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
            {/*Right Col*/}
            <div className="nav-outer">
              {/* Main Menu */}
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <span className="icon lnr-icon-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
        <style>{`
    .main-menu .navigation > li.dropdown > a:after {
       content: "" !important;
}  
        `}</style>
    </header>
    {/*End Main Header */}

    
  </>
  
  )
}

export default Header
