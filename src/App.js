import logo from './assets/logo-movie.png';
import './App.css';
import SetupContainer from './components/SetupContainer';
import OutputContainer from './components/OutputContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="/"><span>Movie</span>Pitch</a>
      </header>

      <SetupContainer/>
      <OutputContainer/>
    </div>
  );
}

export default App;
