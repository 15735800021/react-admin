import React, { Component }                             from 'react';
import logo                                             from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home   from './page/home/index.jsx';
import Layout from './components/layout/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/product" component={Home}/>
            <Route path="/product-category" component={Home}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
