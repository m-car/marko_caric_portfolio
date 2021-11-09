import React, { useState } from 'react';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';

import FooterDiv from './components/FooterDiv';


export default function DisplayMain() {
  const [currentPage, setCurrentPage] = useState("hello");

  const renderPage = () => {
    switch (currentPage) {
      case "Hello":
        return <HelloDiv />;

      case "Portfolio":
        return <MyworkDiv />;



      default:
        return <HelloDiv />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavbarDiv currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <FooterDiv />
    </div>
  )
}