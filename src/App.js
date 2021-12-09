import './App.scss';
import './components/NavBar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { useState } from 'react/cjs/react.development';
import {Switch, Router, Route} from 'react-router-dom';  

function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <div className={`side-bar ${navToggle? 'bar-toggle':''}`}>
        <NavBar/>
      </div>
      <div className="nav-button" onClick={()=>{setNavToggle(!navToggle)}}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/blogs" component={Blogs}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
