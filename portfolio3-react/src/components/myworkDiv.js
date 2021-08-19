import React from 'react';
import Card from './workCard';
const myworks = [
    {
      id: 1,
      name: 'Kode Keeper',
      description:"An app for web-developers to easily store and lookup commonly used code. Kode Keeper is powered by Sequalize, Express, MySQL, Handlesbars, and Bcrypt.", 
      gitlink:'https://github.com/m-car/Kode-Keeper' ,
      deployedLink:"https://kode-keeper.herokuapp.com/",
      purchased: true,
    },
    {
      id: 2,
      name: 'CryptoLaunch',
      description:"An app for novice crypto investors to quickly find available coins on the market, their current value, and trending news at a glance.",
      gitlink:'https://github.com/m-car/crypto-launchpad' ,
      deployedLink:"https://m-car.github.io/crypto-launchpad/",
      purchased: true,
    },
    {
      id: 3,
      name: 'Offline Budget Tracker',
      description:"This is a Progressive Web App (PWA) of a simple budget tracker that allows you to use the app offline. Once the app establishes internet connection again, all offline inputs are saved and updated.",
      gitlink:"https://github.com/m-car/offline-budget-tracker",
      deployedLink:"https://still-plains-20704.herokuapp.com/",
      purchased: false,
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      description:" A web app to view, create, and track daily workouts.",
      gitlink:"https://github.com/m-car/fitness-tracker",
      deployedLink:"https://fierce-stream-14280.herokuapp.com/?id=61154ac35cad730016310a27",
      purchased: false,
    },
    {
      id: 5,
      name: 'Note Taker',
      description:"A note taking app using NPM, Express and javascript to allow the user to record and store notes on the webpage. The page is powered by Heroku.",
      gitlink:"https://github.com/m-car/note-taker",
      deployedLink:"https://damp-anchorage-79022.herokuapp.com/",
      purchased: false,
    },
  ];

function MyworkDiv() {
    return(
    
    <ul className="list-group">
        <h2>portfolio</h2>
        {myworks.map((item) => (
            // <li className="list-group-item" key ={item.id}>
            //  <h2>{item.name}</h2> 
            //  <p>{item.description}</p> 
            // <a {...item.gitlink}>Github Link</a>
            // <a {...item.deployedLink}>Deployed Link</a>
            // </li>
            <div>
            <Card name ={item.name} description={item.description} gitlink={item.gitlink} deployedLink={item.deployedLink} key={item.id} />
            </div>

        ))}
    </ul>
    
    )
}
export default MyworkDiv;