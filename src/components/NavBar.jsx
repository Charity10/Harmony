// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const Navbar = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out: ', error);
      toast.error('Error signing out');
    }
  };
    return (
    <div className="navbar">
      <ul className='navbar__list'>
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
      </ul>
      
      <button className='logOut--btn' onClick={handleLogOut}>
            Log Out
          </button>
    </div>
  );
};

export default Navbar;
