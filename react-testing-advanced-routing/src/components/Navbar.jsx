import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive && "active"}`}
              aria-current='page'
              to='/'
              state='abram emad'>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive && "active"}`}
              to='/About'>
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive && "active"}`}
              to='/Dashboard'>
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
