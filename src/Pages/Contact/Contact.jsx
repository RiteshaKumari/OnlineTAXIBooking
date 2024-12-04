import React from 'react'

function Contact() {
  return (
    <>
    {/* Start main-content */}
    <section
      className="page-title"
      style={{ backgroundImage: "url(images/background/page-title.png)" }}
    >
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">Contact Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
    {/* end main-content */}
    {/*Contact Details Start*/}
    <section className="contact-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="sec-title">
              <span className="sub-title">Send us email</span>
              <h2>Feel free to write</h2>
            </div>
            {/* Contact Form */}
            <form
              id="contact_form"
              name="contact_form"
              className=""
              action="https://html.kodesolution.com/2024/taxix-html/includes/sendmail.php"
              method="post"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_name"
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_email"
                      className="form-control required email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_subject"
                      className="form-control required"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="form_phone"
                      className="form-control"
                      type="text"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="form_message"
                  className="form-control required"
                  rows={7}
                  placeholder="Enter Message"
                  defaultValue={""}
                />
              </div>
              <div className="mb-5">
                <input
                  name="form_botcheck"
                  className="form-control"
                  type="hidden"
                  defaultValue=""
                />
                <button
                  type="submit"
                  className="theme-btn btn-style-one mb-3 mb-sm-0"
                  data-loading-text="Please wait..."
                >
                  <span className="btn-title">Send message</span>
                </button>
                <button
                  type="reset"
                  className="theme-btn btn-style-one bg-theme-color5"
                >
                  <span className="btn-title">Reset</span>
                </button>
              </div>
            </form>
            {/* Contact Form Validation*/}
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="contact-details__right">
              <div className="sec-title">
                <span className="sub-title">Need any help?</span>
                <h2>Get in touch with us</h2>
                <div className="text">
                  Lorem ipsum is simply free text available dolor sit amet
                  consectetur notted adipisicing elit sed do eiusmod tempor
                  incididunt simply dolore magna.
                </div>
              </div>
              <ul className="list-unstyled contact-details__info">
                <li className="d-block d-sm-flex align-items-sm-center">
                  <div className="icon">
                    <span className="lnr-icon-phone-plus" />
                  </div>
                  <div className="text ml-xs--0 mt-xs-10">
                    <h4>Have any question?</h4>
                    <a href="tel:980089850">
                      <span>Free</span> +92 (020)-9850
                    </a>
                  </div>
                </li>
                <li className="d-block d-sm-flex align-items-sm-center">
                  <div className="icon">
                    <span className="lnr-icon-envelope1" />
                  </div>
                  <div className="text ml-xs--0 mt-xs-10">
                    <h4>Write email</h4>
                    <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#422c2727262a272e3202212d2f32232c3b6c212d2f">
                      <span
                        className="__cf_email__"
                        data-cfemail="2d434848494548415d6d4e42405d4c4354034e4240"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </div>
                </li>
                <li className="d-block d-sm-flex align-items-sm-center">
                  <div className="icon">
                    <span className="lnr-icon-location" />
                  </div>
                  <div className="text ml-xs--0 mt-xs-10">
                    <h4>Visit anytime</h4>
                    <span>66 broklyn golden street. New York</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Contact Details End*/}
    {/* Map Section*/}
    <section className="map-section">
      <iframe
        className="map w-100"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      />
    </section>
    {/*End Map Section*/}
  </>
  
  )
}

export default Contact
