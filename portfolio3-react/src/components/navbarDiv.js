import React from 'react';

function NavbarDiv(props) {
  return (
<div>
   <h1>Marko Caric</h1>
   <nav>
   <button type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}>about me</button>
   <button type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}>work</button>
   <button type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}>contact me</button>
   </nav>

</div>
  )
}
export default NavbarDiv;
