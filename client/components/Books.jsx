import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Book from './Book.jsx';

export default class Books extends Component {
    constructor() {
      super();
      this.state = {
        bookID: ''
      };
    }
    render() {
      let { match } = this.props;
      let { bookID } = this.state;
      return (
        <div className='well'>
          <h2>Books</h2>
          <ul className='nav nav-tabs'>
            <li className={bookID === 'angelsanddemons' ? 'active' : ''}
              onClick={() => this.setState({ bookID: 'angelsanddemons' })}>
              <Link to={`${match.url}/angelsanddemons`}>Angels and Demons</Link>
            </li>
            <li className={bookID === 'thedavincicode' ? 'active' : ''}
              onClick={() => this.setState({ bookID: 'thedavincicode' })}>
              <Link to={`${match.url}/thedavincicode`}>The Da Vinci Code</Link>
            </li>
            <li className={bookID === 'thelostsymbol' ? 'active' : ''}
              onClick={() => this.setState({ bookID: 'thelostsymbol' })}>
              <Link to={`${match.url}/thelostsymbol`}>The Lost Symbol</Link>
            </li>
            <li className={bookID === 'inferno' ? 'active' : ''}
              onClick={() => this.setState({ bookID: 'inferno' })}>
              <Link to={`${match.url}/inferno`}>Inferno</Link>
            </li>
            <li className={bookID === 'origin' ? 'active' : ''}
              onClick={() => this.setState({ bookID: 'origin' })}>
              <Link to={`${match.url}/origin`}>Origin</Link>
            </li>
          </ul>
          <br/>
          <Route path={`${match.url}/:bookID`} component={Book}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a book.</h3>
          )}/>
        </div>
      );
    }
}
