import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component{
  render() {
    return (
      <div>
        <h1> Counting the number of times the Button is Clicked !</h1>
     <button onClick ={this.props.onClick} >
       click me </button><br/>
     
    <h3>The button is clicked {this.props.clicks} </h3>
      </div>
    );
  }
}

export default App;
