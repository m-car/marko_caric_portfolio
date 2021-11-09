import React from 'react';
import Card from './workCard';
import './style.css';
import kodekeeperImg from '../Assets/images/kodeKeeperLogoUpdatedWithTitle.png'
import cryptoImg from '../Assets/images/cryptolaunchTablet.PNG'
import offlineBudgetImg from '../Assets/images/offlineBudgetTracker.PNG'
import workoutImg from '../Assets/images/workout.png'
import noteTakerImg from '../Assets/images/noteTaker.png'
const myworks = [
  {
    id: 1,
    name: 'Kode Keeper',
    description: "An app for web-developers to easily store and lookup commonly used code. Kode Keeper is powered by Sequalize, Express, MySQL, Handlesbars, and Bcrypt.",
    gitlink: 'https://github.com/m-car/Kode-Keeper',
    deployedLink: "https://kode-keeper.herokuapp.com/",
    image: kodekeeperImg
  },
  {
    id: 2,
    name: 'CryptoLaunch',
    description: "An app for novice crypto investors to quickly find available coins on the market, their current value, and trending news at a glance.",
    gitlink: 'https://github.com/m-car/crypto-launchpad',
    deployedLink: "https://m-car.github.io/crypto-launchpad/",
    image: cryptoImg
  },
  {
    id: 3,
    name: 'Offline Budget Tracker',
    description: "This is a Progressive Web App (PWA) of a simple budget tracker that allows you to use the app offline. Once the app establishes internet connection again, all offline inputs are saved and updated.",
    gitlink: "https://github.com/m-car/offline-budget-tracker",
    deployedLink: "https://still-plains-20704.herokuapp.com/",
    image: offlineBudgetImg
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    description: " A web app to view, create, and track daily workouts.",
    gitlink: "https://github.com/m-car/fitness-tracker",
    deployedLink: "https://fierce-stream-14280.herokuapp.com/?id=61154ac35cad730016310a27",
    image: workoutImg
  },
  {
    id: 5,
    name: 'Note Taker',
    description: "A note taking app using NPM, Express and javascript to allow the user to record and store notes on the webpage. The page is powered by Heroku.",
    gitlink: "https://github.com/m-car/note-taker",
    deployedLink: "https://damp-anchorage-79022.herokuapp.com/",
    image: noteTakerImg
  },
];

function MyworkDiv() {
  return (
    <div className='App'>

      <ul className="list-group">
        <h2>My projects</h2>
        {myworks.map((item) => (

          <div>
            <Card name={item.name} description={item.description} gitlink={item.gitlink} deployedLink={item.deployedLink} image={item.image} key={item.id} />
          </div>

        ))}
      </ul>
    </div>

  )
}
export default MyworkDiv;