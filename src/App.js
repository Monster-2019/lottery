import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
