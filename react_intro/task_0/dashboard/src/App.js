import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
