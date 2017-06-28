import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/nav';
import New from './component/new/new';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Route exact path="/" component={New}/>

        </Router>
      </div>
    );
  }
}

export default App;
