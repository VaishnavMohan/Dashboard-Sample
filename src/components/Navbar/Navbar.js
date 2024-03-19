import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='left'>
        
      
      <div className="search-bar">
       
        <input type="text" placeholder="Search..." />
      </div>
      <div className="adv-search-bar">
       
        <input className='adv-input' type="text" placeholder="Advanced Search..." />
      </div>
      <button>+ Patient</button>
      
      </div>

      <div className="navbar-items">
      <div className="logo">
       
       Logo
     </div>
        
        <div className="nav-icon">🔔</div>
        <div className="nav-icon">⚙️</div>
      </div>
    </nav>
  );
};

export default Navbar;
