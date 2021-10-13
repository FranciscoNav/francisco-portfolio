import './App.scss';
import './components/NavBar';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <div className="side-bar">
        <NavBar></NavBar>
      </div>
      <div className="main-content"></div>
      <h1>is it working</h1>
    </div>
  );
}

export default App;
