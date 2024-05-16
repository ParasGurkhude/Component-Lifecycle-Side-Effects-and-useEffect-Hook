import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Counter Application</h1>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
