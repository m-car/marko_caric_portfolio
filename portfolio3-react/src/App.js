import logo from './logo.svg';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';
import ContactmeDiv from './components/contactmeDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarDiv />
        <HelloDiv />
        <MyworkDiv />
        <ContactmeDiv />
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
