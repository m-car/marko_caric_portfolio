
import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    //temporary styling to distinguish cards
    background: 'red'
  };


  return (
    <div>
      <div className="card" style={cardStyle}>
        
        <li className="list-group-item" key ={props.id}>
             <h2>{props.name}</h2> 
             <p>{props.description}</p> 
            <p>Github Link {props.gitlink}</p>
            <p>Deployed Link {props.deployedLink}</p>
        </li>
      </div>
    </div>
  );
}
