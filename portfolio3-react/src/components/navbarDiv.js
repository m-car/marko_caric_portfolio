import React from 'react';
import './style.css';



function NavbarDiv({ currentPage, handlePageChange }) {
  return (
    <div className="bg-img">

      <div className="container">
        <div className="topnav">
          <ul>
            <li>
              <p> marko caric</p>
            </li>
            <li>

              <a
                href="#hello"
                onClick={() => handlePageChange('Hello')}
                className={currentPage === 'Hello' ? 'nav-link active' : 'nav-link'}
              >
                Hello
              </a>

            </li>
            <li>

              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}

                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            {/* <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact Me
          </a> */}
            <a
              href="https://docs.google.com/document/d/1YaKIQGoadMTrknyLNt5zPO2RoWRH4pMJF2EYIKJBZtc/edit?usp=sharing"
              onClick={() => handlePageChange('Resume')}
              target="_blank"
              rel='noopener noreferrer'
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavbarDiv;
