import logo from './logo.svg';
import './App.css';
import HelloDiv from './components/helloDiv';
import NavbarDiv from './components/navbarDiv';
import MyworkDiv from './components/myworkDiv';
import ContactmeDiv from './components/contactmeDiv';
import DisplayMain  from './displayMain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayMain />
        
        <p>
          put footer links/buttons here
        </p>
      </header>
    </div>
  );
}

export default App;

{/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}