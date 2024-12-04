import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <nav>
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "black",
                    })}
                    to='/dashboard/users'>
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "black",
                    })}
                    to='/dashboard/posts'>
                    Posts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
