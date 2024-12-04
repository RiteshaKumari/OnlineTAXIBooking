import React from 'react';

function Signup() {
  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="signup-header">
          <h1>Sign Up</h1>
          <p>Create your account and start your journey with us!</p>
        </div>
        <form>
          <div className="form-group input-icon">
            <i className="fa fa-user"></i>
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="form-group input-icon">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group input-icon">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>
        <div className="login-prompt">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>

      <style>{`
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

        .signup-page {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3498db, #8e44ad);
        }

        .form-container {
          width: 100%;
          max-width: 500px;
          padding: 40px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .signup-header h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 10px;
        }

        .signup-header p {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
          position: relative;
        }

        .input-icon {
          position: relative;
        }

        .input-icon i {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #888;
        }

        .input-icon input {
          width: 100%;
          padding: 12px 15px;
          padding-left: 40px; /* Leave space for the icon */
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: border-color 0.3s ease-in-out;
        }

        .input-icon input:focus {
          border-color: #3498db;
          outline: none;
        }

        .btn-signup {
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

        .btn-signup:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #3498db, #8e44ad);
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

        /* Responsiveness */
        @media (max-width: 768px) {
          .form-container {
            padding: 30px;
          }

          .signup-header h1 {
            font-size: 1.5rem;
          }

          .signup-header p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Signup;
