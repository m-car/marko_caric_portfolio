import logo from './logo.svg';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';
import ContactmeDiv from './components/contactmeDiv';
import DisplayMain  from './displayMain';

// const myworks = [
//   {
//     id: 1,
//     name: 'Kode Keeper',
//     description:"a project description", 
//     gitlink:'https://github.com/m-car/Kode-Keeper' ,
//     deployedLink:"",
//     purchased: true,
//   },
//   {
//     id: 2,
//     name: 'CryptoLaunch',
//     description:"a project description",
//     gitlink:'https://github.com/m-car/crypto-launchpad' ,
//     deployedLink:"",
//     purchased: true,
//   },
//   {
//     id: 3,
//     name: 'Offline Budget Tracker',
//     description:"a project description",
//     gitlink:"https://github.com/m-car/offline-budget-tracker",
//     deployedLink:"",
//     purchased: false,
//   },
// ];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayMain />
        {/* <NavbarDiv /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
