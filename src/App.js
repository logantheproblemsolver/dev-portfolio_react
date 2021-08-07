import './App.css';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Hello from './pages/Hello';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/introduction" component={Hello} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
