import React, { Component } from 'react';
import './new.css';
import book from '../../book.json';
class New extends Component {
  _release() {
    let books = Object.values(book);
    return books.map((each,index)=>{
      return (<div>
        {each.name}
      </div>);
    });
  }
  render() {
    return (
      <div className="new">
        <h1>New Release</h1>
        {this._release()}
      </div>
    );
  }
}

export default New;
