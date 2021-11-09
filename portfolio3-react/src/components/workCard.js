
import React from 'react';
import './style.css';
export default function Card(props) {



  return (

    <figure className="App">
      <h2>{props.name}</h2>
      <a href={props.gitlink} >Github Repo </a>
      <a href={props.deployedLink}>Deployed Link </a><br></br>
      <img src={props.image} alt=""></img>
      <figcaption>{props.description}</figcaption>
      <br></br>
      <br></br>
    </figure>

  );
}
