import './App.scss';
import './components/NavBar';
import NavBar from './components/NavBar';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <div className="App">
      <div className="side-bar">
        <NavBar></NavBar>
      </div>
      <div className="main-content">
        <div className='content'>
          <Switch>
            <Route path='/' exact> 
              <Home/>
            </Route>

            <Route path='/about' exact> 
              <About/>
            </Route>

            <Route path='/blogs' exact>
              <Blogs/>
            </Route>

            <Route path='/contact' exact>
              <Contact/>
            </Route>

            <Route path='/portfolio' exact>
              <Portfolio/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
