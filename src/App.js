import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component{
  render() {
    return (
     
        <div onClick ={this.props.onClick} >this div is clicked {this.props.clicks} times</div>
     
      

    );
  }
}

export default App;
