import React, { useState,useEffect  } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';

function ForgetPassword() {
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = Cookies.get('xyzra'); // Get the email cookie
    if (!userEmail) {
      // If no cookie, redirect to login
      navigate('/signin');
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      otp: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required.'),
      password: Yup.string().required('Password is required.'),
      otp: Yup.string().required('OTP is required.')
    })
  });

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailDisabled, setIsEmailDisabled] = useState(false);
  const [isOtpDisabled, setIsOtpDisabled] = useState(true);
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);
  const [actualotp, actualsetotp] = useState("");

  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post(`https://localhost:7009/api/Home/verifyemail/${email}`);
      if (response.status === 200) {
        Swal.fire("Success", "Email verified! Please enter the OTP sent to your email.", "success");
        setIsEmailDisabled(true);
        setIsOtpDisabled(false);
        setIsPasswordInputVisible(false);
        actualsetotp(response.data.otp);
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Failed to verify email. Try again.", "error");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post(`https://localhost:7009/api/Home/verifyotp/${otp}/${actualotp}`);
      if (response.status === 200) {
        Swal.fire("Success", "OTP verified! Please enter your new password.", "success");
        setIsOtpDisabled(true);
        setIsPasswordInputVisible(true);
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Invalid OTP. Try again.", "error");
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post(`https://localhost:7009/api/Home/resetpassword/${email}/${password}`);
      if (response.status === 200) {
        Swal.fire("Success", "Password reset successfully!", "success");
        navigate(`/signin`);
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Failed to reset password. Try again.", "error");
    }
  };

  return (
    <div className="body">
      <div className="forget-password-container">
        <h1>Forgot Password</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isEmailDisabled}
            required
            
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          {!isEmailDisabled && (
            <button onClick={handleEmailSubmit} className="btn-primary">
              Verify Email
            </button>
          )}
        </div>

        {isOtpDisabled === false && (
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={isOtpDisabled}
              required
            />
            {formik.touched.otp && formik.errors.otp ? (
              <div className="error">{formik.errors.otp}</div>
            ) : null}

            {!isOtpDisabled && (
              <button onClick={handleOtpSubmit} className="btn-primary">
                Verify OTP
              </button>
            )}
          </div>
        )}

        {isPasswordInputVisible && (
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <button onClick={handlePasswordSubmit} className="btn-primary">
              Reset Password
            </button>
          </div>
        )}

        <style>{`
          .error {
            color: red;
            font-size: 0.9rem;
            margin-top: 5px;
          }
          .body {
            font-family: 'Poppins', Arial, sans-serif;
            background: linear-gradient(135deg, #3498db, #8e44ad);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
          }
          .forget-password-container {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #f9f9f9;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-size: 1rem;
            color: #555;
          }
          input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
          }
          .btn-primary {
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: #3498db;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
          }
          .btn-primary:hover {
            background: #2980b9;
          }
        `}</style>
      </div>
    </div>
  );
}

export default ForgetPassword;
