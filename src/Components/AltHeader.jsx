import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

function AltHeader() {
  const navigate = useNavigate();
  const logout = async () => {
    // Show the confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make the logout API request
          const response = await axios.get("https://localhost:7009/api/Home/Signout", {
            withCredentials: true, // Ensures cookies are sent with the request
          });
  
          if (response.status === 200) {
            // Expire the 'xyzra' cookie
            Cookies.set('xyzra', '', { expires: -1, secure: true });
  
            // Show success message
            Swal.fire({
              title: "Logout!",
              text: "You have been logged out.",
              icon: "success",
            });
  
            // Navigate to the login page
            navigate("/signin");
          }
        } catch (error) {
          // Handle errors, such as network issues or server errors
          Swal.fire({
            title: "Error",
            text: error.response?.data?.message || "Something went wrong while logging out.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
    <input type="checkbox" id="menu-toggle" />
    <div className="sidebar">
      <div className="side-header">
        <h3>
     
           <h4>Admin</h4>
         
        </h3>
      </div>
      <div className="side-content">
        <div className="profile">
          {/* <div
            className="profile-img bg-img"
            style={{ backgroundImage: "url(img/3.jpeg)" }}
          /> */}
        
          {/* <small>Developer</small> */}
        </div>
        <div className="side-menu">
          <ul>
            <li>
              <a href="/" className="active">
                <span className="las la-home" />
                <small>Home</small>
              </a>
            </li>
           
            {/* <li>
              <a href="#!">
                <span className="las la-envelope" />
                <small>Mailbox</small>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="las la-clipboard-list" />
                <small>Projects</small>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="las la-shopping-cart" />
                <small>Orders</small>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="las la-tasks" />
                <small>Tasks</small>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    <div className="main-content">
      <header>
        <div className="header-content">
          <label htmlFor="menu-toggle">
            <span className="las la-bars" />
          </label>
          <img src="images/CustomImage/Logo.png" alt="Logo" style={{ width: "165px",
    height: "60px"}} />
          <div className="header-menu">
            {/* <label htmlFor="">
              <span className="las la-search" />
            </label>
            */}
         
            <div className="user" onClick={logout} style={{cursor:"pointer"}}>
              <div
                className="bg-img"
                style={{ backgroundImage: "url(img/1.jpeg)" }}
              />
              <span className="las la-power-off" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>
      </div>
  </>
  );
}

export default AltHeader
