import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} height='70' width='150'/>
      </a>
      <span className="navbar-text">
        COVID-19 smell test
      </span>
    </nav>
  )
};

export default Header;