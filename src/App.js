import React, { Component } from 'react';

import './App.css';
import data from './data';

import Header from './Header'
import Main from './Main'
import Sliders from './Sliders'

class App extends Component {
  
constructor(){
  super();

    this.state = {
    data: data,
    value: 0,
    }


}


  render(){

  return (
    <div className='App'>
      
      <Header />
      <Main />
      <Sliders />
    </div>
  );
  };
  
}


export default App;
