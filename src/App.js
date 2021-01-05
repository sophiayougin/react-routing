import './App.css';
import Dashboard from './Dashboard';
import About from './About';
import Navigation from './Navigation';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
          <Navigation/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/dashboard' component={Dashboard}/> 
          </Switch>
      </div>
    </Router>
  );
}

export default App;
