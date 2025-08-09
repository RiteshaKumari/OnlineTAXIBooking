import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

function Contact() {
  const formik = useFormik({
    initialValues: {
      form_subject: '',
      form_phone: '',
      form_message: '',
    },
    validationSchema: Yup.object({
      form_subject: Yup.string().required('Subject is required.'),
      form_phone: Yup.string()
        .required('Phone number is required.')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
      form_message: Yup.string()
      .required('Message is required')
      .max(600, 'Message cannot exceed 600 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('https://localhost:7009/api/Home/Contact', values);
        if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Details have been saved",
            showConfirmButton: false,
            timer: 1500
          });
          resetForm();
        } else {
          alert('Failed to send the message. Please try again.');
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: {error},
          icon: "error"
        });
      }
    },
  });

  return (
    <>
      {/* Start main-content */}
      <section className="page-title" style={{ backgroundImage: 'url(images/background/page-title.png)' }}>
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

      {/* Contact Details Start */}
      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>

              {/* Contact Form */}
              <form id="contact_form" name="contact_form" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.form_subject}
                      />
                      {formik.touched.form_subject && formik.errors.form_subject ? (
                        <div className="error">{formik.errors.form_subject}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.form_phone}
                      />
                      {formik.touched.form_phone && formik.errors.form_phone ? (
                        <div className="error">{formik.errors.form_phone}</div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows={7}
                    placeholder="Enter Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.form_message}
                  />
                  {formik.touched.form_message && formik.errors.form_message ? (
                    <div className="error">{formik.errors.form_message}</div>
                  ) : null}
                </div>

                <div className="mb-5">
                  <input name="form_botcheck" className="form-control" type="hidden" defaultValue="" />
                  <button type="submit" className="theme-btn btn-style-one mb-3 mb-sm-0" data-loading-text="Please wait...">
                    <span className="btn-title">Send message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
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
                        <span>Free</span> +91 8475 904950
                      </a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-envelope1" />
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>Write email</h4>
                      <a href="mailto:someone@example.com">
                      mabhdrakali999@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-location" />
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>Visit anytime</h4>
                      <span>25 Street, 145 Road New
                      Patna,Bihar - 800024</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Details End */}

      {/* Map Section */}
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
      </section>
    </>
  );
}

export default Contact;
