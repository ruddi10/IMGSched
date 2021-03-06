import React, {Component} from 'react';

import Home from './components/home';
import Timeline from './components/timeline';
import Signup from './components/signup';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class  App  extends  Component {

  render() {
      return (
        <Router>
           <Route exact path="/" component={Home} />
           <Route path="/timeline" component={Timeline} />
           <Route exact path="/signup" component={Signup} />
        </Router>
      );
  }
  }
  export  default  App;
  