import './App.css';
import React, { Component } from 'react';
import Answers from './components/Answers';


export default class App extends Component {

  

  render() {
    return (
      <div>
        <h1>Game of Fetches :D</h1>
          <Answers />
      </div>
    )
  }
}




