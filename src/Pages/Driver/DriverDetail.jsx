import React from 'react'

function DriverDetail() {
  return (
    <>
  {/* Start main-content */}
  <section
    className="page-title"
    style={{ backgroundImage: "url(images/background/page-title.png)" }}
  >
    <div className="auto-container">
      <div className="title-outer text-center">
        <h1 className="title">Driver Details</h1>
        <ul className="page-breadcrumb">
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li>Driver Details</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/*Team Details Start*/}
  <section className="team-details">
    <div className="" />
    <div className="container pb-100">
      <div className="team-details__top pb-70">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-left">
              <div className="team-details__top-img">
                <img src="images/resource/team-details.jpg" alt="" />
                <div className="team-details__big-text" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-right">
              <div className="team-details__top-content">
                <h3 className="team-details__top-name">Aleesha Brown</h3>
                <p className="team-details__top-title">
                  Managing Director &amp; CEO
                </p>
                <p className="team-details__top-text-1">
                  I help my clients stand out and they help me grow.
                </p>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Email Address</h5>
                  <div className="">
                    <span>
                      <a
                        href="https://html.kodesolution.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c5aba0a0a1ada0a9b585bcaab0b7a1aaa8a4acabeba6aaa8"
                      >
                        [email&nbsp;protected]
                      </a>
                    </span>
                  </div>
                </div>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Phone Number</h5>
                  <div className="">
                    <span>+012-3456-789</span>
                  </div>
                </div>
                <div className="team-details-contact">
                  <h5 className="mb-0">Web Address</h5>
                  <div className="">
                    <span>www.yourdomain.com</span>
                  </div>
                </div>
                <div className="team-details__social">
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-facebook" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-pinterest-p" />
                  </a>{" "}
                  <a href="#!">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-details__bottom pt-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__bottom-left">
              <h4 className="team-details__bottom-left-title">
                Personal Experience
              </h4>
              <p className="team-details__bottom-left-text">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries architecto dolorem ipsum quia
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__bottom-right">
              <div className="team-details__progress">
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Tecnology</h4>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="90%">
                      <div className="count-text">90%</div>
                    </div>
                  </div>
                </div>
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Marketing</h4>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="80%">
                      <div className="count-text">80%</div>
                    </div>
                  </div>
                </div>
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Business</h4>
                  <div className="bar marb-0">
                    <div className="bar-inner count-bar" data-percent="75%">
                      <div className="count-text">75%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Team Details End*/}
  {/*Contact Details Start*/}
  <section className="team-contact-form">
    <div className="container pb-100">
      <div className="sec-title text-center">
        <span className="sub-title">Contact With Us Now</span>
        <h2 className="section-title__title">Write Us Your Text</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
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
                rows={5}
                placeholder="Enter Message"
                defaultValue={""}
              />
            </div>
            <div className="mb-3 text-center">
              <input
                name="form_botcheck"
                className="form-control"
                type="hidden"
                defaultValue=""
              />
              <button
                type="submit"
                className="theme-btn btn-style-one"
                data-loading-text="Please wait..."
              >
                <span className="btn-title">Send message</span>
              </button>
              <button type="reset" className="theme-btn btn-style-one">
                <span className="btn-title">Reset</span>
              </button>
            </div>
          </form>
          {/* Contact Form Validation*/}
        </div>
      </div>
    </div>
  </section>
  {/*Contact Details End*/}
</>

  )
}

export default DriverDetail
