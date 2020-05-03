import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/Navigation';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav></Nav>
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/shop' component={Shop}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;
