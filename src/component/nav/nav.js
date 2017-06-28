import React, { Component } from 'react';
import './nav.css';
class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className='logo'>
          <h2>BOOK</h2>
        </div>
        <div className='search'>
          <form onSubmit=''>
            <input type='text' name='search' />
            <input type='submit' value='search' />
          </form>
        </div>
        <ul className='menu'>
            <li>New Release</li>
            <li>{"Book's List"}</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
