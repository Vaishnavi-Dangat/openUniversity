import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import "../App.css";

const Navbar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
          <NavLink className="navbar-brand" to="/">Open University</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/registred-users">Users</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;