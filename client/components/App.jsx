import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Books from './Books.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home'
    };
  }
  render() {
    let { activeItem } = this.state;
    return (
      <HashRouter>
        <div style={{ padding: '16px' }}>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Dan Brown</a>
              </div>
              <ul class="nav navbar-nav">
                <li className={ activeItem === 'home' ? 'active' : '' }
                  onClick={() => this.setState({ activeItem: 'home '})}>
                  <Link to="/">Home</Link>
                </li>
                <li className={ activeItem === 'books' ? 'active' : '' }
                  onClick={() => this.setState({ activeItem: 'books '})}>
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home}/>
          <Route path="/books" component={Books}/>
        </div>
      </HashRouter>
    );
  }
}
