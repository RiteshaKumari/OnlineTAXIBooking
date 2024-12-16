import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('email is required.'),
      password: Yup.string().required('Password is required.'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('https://localhost:7009/api/Home/signin', values);
        if (response.status === 200) {
          const encodedEmail = btoa(values.email);

          // Set the encoded email in a cookie with a 24-hour expiry
          Cookies.set('xyzra', encodedEmail, { expires: 1, secure: true });

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
      
        //  const userId = response.data.userId;
          navigate(`/admindashboard`); 
      
        } else {
          Swal.fire({
            title: 'Login Failed',
            text: 'Invalid credentials. Please try again.',
            icon: 'error',
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error.response?.data?.message || 'Something went wrong.',
          icon: 'error',
        });
      }
    }
  });

  const decodeEmail = () => {
    const encodedEmail = Cookies.get('xyzra');
    if (encodedEmail) {
      try {
        const decodedEmail = atob(encodedEmail);
        return decodedEmail;
      } catch (error) {
        console.error('Failed to decode email:', error);
        return null;
      }
    }
    return null;
  };

  const email = decodeEmail();
  console.log('Decoded Email:', email);

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back! Please login to continue.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group input-icon">
            <i className="fa fa-user"></i>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          {formik.touched.email && formik.errors.email ? (
  <div className="error">{formik.errors.email}</div>
) : null}


          </div>
          <div className="form-group input-icon">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
           {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
          {/* <div className="login-prompt">
            <p>
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </div> */}
        </form>
      </div>

      <style>{`
      .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 5px;
  }
        .login-prompt {
          margin-top: 20px;
          text-align: center;
        }

        .login-prompt a {
          color: #3498db;
          text-decoration: none;
          font-weight: 600;
        }

        .login-prompt a:hover {
          text-decoration: underline;
        }
   
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', Arial, sans-serif;
          background: linear-gradient(135deg, #3498db, #8e44ad);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        .form-container {
          width: 100%;
          top: 21px;
          position: relative;
          margin: 0px;
          padding: 55px;
          background: linear-gradient(135deg, #ffffff, #f9f9f9);
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 10px;
        }

        p {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 20px;
        }

        .form-group {
          position: relative;
          margin-bottom: 15px;
        }

        .input-icon input {
          width: 100%;
          padding: 12px 15px 12px 40px; /* Adjusted padding for icon */
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: border-color 0.3s ease-in-out;
        }

        .input-icon i {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #888;
        }

        input:focus {
          border-color: #3498db;
          outline: none;
        }

        .btn-login {
          width: 100%;
          padding: 12px 15px;
          background: linear-gradient(135deg, #8e44ad, #3498db);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s, background 0.3s;
        }

        .btn-login:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #3498db, #8e44ad);
        }

        .extra {
          margin-top: 15px;
        }

        .extra a {
          color: #3498db;
          text-decoration: none;
        }

        .extra a:hover {
          text-decoration: underline;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .login-box {
            padding: 20px;
          }

          h1 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
