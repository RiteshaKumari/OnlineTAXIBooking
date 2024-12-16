import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const Booking = () => {
  const formik = useFormik({
    initialValues: {
      startingDestination: '',
      endDestination: '',
      phone: '',
      startingDate: '',
      noOfDays: '',
    },
    validationSchema: Yup.object({
      startingDestination: Yup.string().required('Starting destination is required'),
      endDestination: Yup.string().required('End destination is required'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^(\+?\d{1,4}[\s-])?(\d{10})$/, 'Invalid phone number'),
      startingDate: Yup.date().required('Starting date is required'),
      noOfDays: Yup.number()
        .required('Number of days is required')
        .positive('Must be a positive number')
        .integer('Must be an integer'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('https://localhost:7009/api/Home/Booking', values); 
        if (response.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Booking successful!',
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to book the taxi. Please try again.',
            icon: 'error',
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      }
    },
  });

  return (
    <>
      <section className="page-title" style={{ backgroundImage: 'url(images/background/page-title.png)' }}>
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Book Your Taxi</h1>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }} />
        <div className="bg-overlay" />
        <div className="auto-container">
          <div className="booking-form">
            <div className="sec-title">
              <h2 className="letters-slide-up text-split">Book Your Taxi Ride!</h2>
              <div className="text">To get the ride of your taxi please select from the following:</div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="startingDestination"
                    placeholder="Start Destination"
                    value={formik.values.startingDestination}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.startingDestination && formik.errors.startingDestination && (
                    <div className="error">{formik.errors.startingDestination}</div>
                  )}
                </div>

                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="endDestination"
                    placeholder="End Destination"
                    value={formik.values.endDestination}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.endDestination && formik.errors.endDestination && (
                    <div className="error">{formik.errors.endDestination}</div>
                  )}
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="error">{formik.errors.phone}</div>
                  )}
                </div>

                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="number"
                    name="noOfDays"
                    placeholder="Number of Days"
                    value={formik.values.noOfDays}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.noOfDays && formik.errors.noOfDays && (
                    <div className="error">{formik.errors.noOfDays}</div>
                  )}
                </div>

                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="date"
                    name="startingDate"
                    placeholder="Starting Date"
                    value={formik.values.startingDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.startingDate && formik.errors.startingDate && (
                    <div className="error">{formik.errors.startingDate}</div>
                  )}
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="theme-btn btn-style-one" disabled={formik.isSubmitting}>
                    <span className="btn-title">{formik.isSubmitting ? 'Booking...' : 'Book Taxi'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
