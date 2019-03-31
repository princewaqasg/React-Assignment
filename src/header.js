import React, { Component } from 'react';

import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
   <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#porfile">Profile</a></li>
  <li><a href="#contact">Contact</a></li>
 
  
</ul>
      </div>
    );
  }
}

export default Header;
