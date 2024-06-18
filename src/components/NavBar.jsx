// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/user-dashboard" activeClassName="active">
            <i className="fas fa-user"></i> Profile
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/about" activeClassName="active">
            <i className="fas fa-heart"></i> Find a Roommate
          </NavLink>
        </li>
        <li>
          <NavLink to="/onboarding" activeClassName="active">
            <i className="fas fa-cog"></i> 
            Onboarding test
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            <i className="fas fa-lock"></i> Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
