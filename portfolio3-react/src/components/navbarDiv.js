import React from 'react';
import './style.css';



function NavbarDiv({currentPage, handlePageChange}) {
  return (
    <div className="bg-img">

    <div className="container">
    <div className="topnav">
      <a
        href="#hello"
        onClick={() => handlePageChange('Hello')}
        className={currentPage === 'Hello' ? 'nav-link active' : 'nav-link'}
        >
        Hello
      </a>
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        My Portfolio
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
        Contact Me
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        Resume(coming soon)
      </a>
    </div>
    </div>
    </div>
);
}
export default NavbarDiv;
