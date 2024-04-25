import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js';
import './App.css';

function App() {

  const isIndex = true;
  const currentYear = getFullYear();
  const textFooter = getFooterCopy(isIndex);
  
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"></input>
        <button type='button'>OK</button>
      </div>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright {currentYear} - {textFooter}</p>
      </footer>
    </div>
  );
}

export default App;