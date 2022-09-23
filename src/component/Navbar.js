import React from "react";

import "./NavBar.css";

const Navbar = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <img
      src={user.avatar_url}
      width="50"
      height="50"
      className="mr-3 avatar"
      alt="user"
    />
    <h3 className="user__name" style={{ color: "white" }}>{user.name}</h3>

    <img src="../../../public/logo.png" alt="" />
    <div className="user__link">
    {/* <a className="ml-auto d-flex align-items-center" href="/">
      Search Other User
    </a> */}
    {/* <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Search Other User</a> */}
    <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Search Other User</a>
    </div>
  
  </nav>
);

export default Navbar;
