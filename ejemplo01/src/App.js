import logo from './logo.svg';
import logo2 from './kodigo-mac.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" />
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
        <button className='btn btn-primary'>Click</button>
      </header>
    </div>
  );
}

export default App;
