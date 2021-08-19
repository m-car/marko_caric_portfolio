import React from 'react';
import Card from './workCard';
const myworks = [
    {
      id: 1,
      name: 'Kode Keeper',
      description:"a project description", 
      gitlink:'https://github.com/m-car/Kode-Keeper' ,
      deployedLink:"lolololololo",
      purchased: true,
    },
    {
      id: 2,
      name: 'CryptoLaunch',
      description:"a project description",
      gitlink:'https://github.com/m-car/crypto-launchpad' ,
      deployedLink:"lelelelelele",
      purchased: true,
    },
    {
      id: 3,
      name: 'Offline Budget Tracker',
      description:"a project description",
      gitlink:"https://github.com/m-car/offline-budget-tracker",
      deployedLink:"",
      purchased: false,
    },
  ];

function MyworkDiv() {
    return(
    
    <ul className="list-group">
        {myworks.map((item) => (
            // <li className="list-group-item" key ={item.id}>
            //  <h2>{item.name}</h2> 
            //  <p>{item.description}</p> 
            // <a {...item.gitlink}>Github Link</a>
            // <a {...item.deployedLink}>Deployed Link</a>
            // </li>
            <div>
            <h2>portfolio</h2>
            <Card name ={item.name} description={item.description} gitlink={item.gitlink} deployedLink={item.deployedLink} key={item.id} />
            </div>

        ))}
    </ul>
    
    )
}
export default MyworkDiv;