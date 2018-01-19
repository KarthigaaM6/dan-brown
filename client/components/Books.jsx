import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Book from './Book.jsx';

export default class Books extends Component {
    render() {
      let { match } = this.props;
      return (
        <div>
          <h2>Books</h2>
          <ul className=''>
            <li><Link to={`${match.url}/angelsanddemons`}>Angels and Demons</Link></li>
            <li><Link to={`${match.url}/thedavincicode`}>The Da Vinci Code</Link></li>
            <li><Link to={`${match.url}/thelostsymbol`}>The Lost Symbol</Link></li>
            <li><Link to={`${match.url}/inferno`}>Inferno</Link></li>
            <li><Link to={`${match.url}/origin`}>Origin</Link></li>
          </ul>

          <Route path={`${match.url}/:bookID`} component={Book}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a book.</h3>
          )}/>
        </div>
      );
    }
}
