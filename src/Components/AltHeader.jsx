import React from 'react'

function AltHeader() {
  return (
    <>
    <input type="checkbox" id="menu-toggle" />
    <div className="sidebar">
      <div className="side-header">
        <h3>
          M<span>odern</span>
        </h3>
      </div>
      <div className="side-content">
        <div className="profile">
          <div
            className="profile-img bg-img"
            style={{ backgroundImage: "url(img/3.jpeg)" }}
          />
          <h4>David Green</h4>
          <small>Art Director</small>
        </div>
        <div className="side-menu">
          <ul>
            <li>
              <a href="#!" className="active">
                <span className="las la-home" />
                <small>Dashboard</small>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="las la-user-alt" />
                <small>Profile</small>
              </a>
            </li>
            <li>
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
            </li>
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
          <div className="header-menu">
            {/* <label htmlFor="">
              <span className="las la-search" />
            </label>
            */}
            <div className="user">
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
