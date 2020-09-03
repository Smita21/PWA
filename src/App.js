// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './Today/Today'
// Import the History component to be used below
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import { Link } from "react-router-dom";
import Landing from './Landing/Landing';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Landing} />

          <Route exact path="/dashboard" component={Today} />


        </Router>
      </div>
    );
  }
}

export default App;