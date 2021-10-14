import './App.scss';
import './components/NavBar';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
      <div className="side-bar">
        <NavBar></NavBar>
      </div>
      <div className="main-content">
        <div className='content'>
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
