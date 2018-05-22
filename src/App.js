import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {  
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route path="/" component={Home} />
            <Route path="/cc-sdk-examples" render={() => {}} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
