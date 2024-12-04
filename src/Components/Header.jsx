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
                <a href="index-2.html">
                  <img src="images/logo-2.png" alt="Logo" />
                </a>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="current dropdown">
                    <a href="index-2.html">Home</a>
                    <ul>
                      <li>
                        <a href="index-2.html">Home Layout 1</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Layout 2</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Layout 3</a>
                      </li>
                      <li className="dropdown">
                        <a href="index-1-single.html">Single Styles</a>
                        <ul>
                          <li>
                            <a href="index-1-single.html">Single Page 01</a>
                          </li>
                          <li>
                            <a href="index-2-single.html">Single Page 02</a>
                          </li>
                          <li>
                            <a href="index-3-single.html">Single Page 03</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index-1-dark.html">Dark Styles</a>
                        <ul>
                          <li>
                            <a href="index-1-dark.html">Dark Page 01</a>
                          </li>
                          <li>
                            <a href="index-2-dark.html">Dark Page 02</a>
                          </li>
                          <li>
                            <a href="index-3-dark.html">Dark Page 03</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-1-rtl.html">RTL Style One</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#!">Pages</a>
                    <ul>
                      <li>
                        <a href="page-about.html">About</a>
                      </li>
                      <li>
                        <a href="page-booking.html">Booking</a>
                      </li>
                      <li>
                        <a href="page-taxi.html">Taxi List</a>
                      </li>
                      <li className="dropdown">
                        <a href="#!">Driver</a>
                        <ul>
                          <li>
                            <a href="page-team.html">Driver List</a>
                          </li>
                          <li>
                            <a href="page-team-details.html">Driver Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="page-testimonial.html">Testimonial</a>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="page-404.html">Page 404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#!">Services</a>
                    <ul>
                      <li>
                        <a href="page-services.html">Services List</a>
                      </li>
                      <li>
                        <a href="page-service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#!">Shop</a>
                    <ul>
                      <li>
                        <a href="shop-products.html">Products</a>
                      </li>
                      <li>
                        <a href="shop-products-sidebar.html">
                          Products with Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#!">News</a>
                    <ul>
                      <li>
                        <a href="news-grid.html">News Grid</a>
                      </li>
                      <li>
                        <a href="news-details.html">News Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
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
                  href="page-booking.html"
                  className="theme-btn btn-style-one dark-line-two hover-light"
                >
                  <span className="btn-title">Book a Taxi</span>
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
    </header>
    {/*End Main Header */}

    
  </>
  
  )
}

export default Header
