import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';
import TopMenu from './menus/TopMenu';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';


class App extends Component {

  componentDidMount() {
    document.title='Lara Vanderlaan'
  }

  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <ScrollManager history={this.history}>
        <Router history={this.history}>
          <WindowScroller>
            <div id='mainAppContainer'>
              <TopMenu />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-me' component={AboutMe} />
                <Redirect to='/' />
              </Switch>
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
