import React from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

  return (
    <div className='app'>
      {showSidebar && <NavBar />}
      <div className={`main-content ${showSidebar ? 'with-sidebar' : ''}`}>{children}</div>
    </div>
  );
};



export default Layout