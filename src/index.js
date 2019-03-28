import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './header';
import About from './about';
import Profile from './profile';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header')); 
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Profile />, document.getElementById('porfile'));


serviceWorker.unregister();
